import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const config = {
  matcher: [
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers
    .get("host")!
    .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);
  const path = url.pathname;

  // Admin dashboard (app.domain.com)
  if (hostname == `app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    const session = await getToken({ req });

    // Student routes blocked on admin
    if (path.startsWith("/student") || path.startsWith("/courses")) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    if (!session && path !== "/login") {
      return NextResponse.redirect(new URL("/login", req.url));
    } else if (session && path == "/login") {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.rewrite(
      new URL(`/app${path === "/" ? "" : path}`, req.url),
    );
  }

  // Root domain
  if (hostname === "vercel.pub") {
    return NextResponse.redirect(
      "https://vercel.com/blog/platforms-starter-kit",
    );
  }

  if (
    hostname === "localhost:3000" ||
    hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN
  ) {
    return NextResponse.rewrite(new URL(`/home${path}`, req.url));
  }

  // Student LMS (slug.domain.com)
  // Check if it's a subdomain
  const subdomain = hostname.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "");

  if (subdomain !== hostname) {
    // It's a subdomain - student LMS
    const studentSession = req.cookies.get("student-session")?.value;

    // Block admin routes on student subdomains
    if (
      path.startsWith("/site/") ||
      path.startsWith("/post/") ||
      path.startsWith("/sites") ||
      path.startsWith("/settings")
    ) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Require auth for student routes
    if (
      !studentSession &&
      !path.startsWith("/login") &&
      !path.startsWith("/signup") &&
      path !== "/"
    ) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // Inject siteId for student routes
    const response = NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
    response.headers.set("x-tenant-subdomain", subdomain);
    return response;
  }

  // Default: rewrite to [domain] route
  return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
}
