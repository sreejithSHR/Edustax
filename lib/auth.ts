import { getServerSession, type NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { cookies, headers } from "next/headers";

const VERCEL_DEPLOYMENT = !!process.env.VERCEL_URL;

/* -------------------------------------------------------------------------- */
/*                                NEXT AUTH                                   */
/* -------------------------------------------------------------------------- */

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          gh_username: profile.login,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
    }),
  ],

  adapter: PrismaAdapter(prisma),

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
    verifyRequest: "/login",
    error: "/login",
  },

  cookies: {
    sessionToken: {
      name: `${VERCEL_DEPLOYMENT ? "__Secure-" : ""}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        domain: VERCEL_DEPLOYMENT
          ? `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
          : undefined,
        secure: VERCEL_DEPLOYMENT,
      },
    },
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
      }
      return token;
    },

    session: async ({ session, token }) => {
      session.user = {
        ...session.user,
        // @ts-expect-error
        id: token.sub,
        // @ts-expect-error
        username: token?.user?.username || token?.user?.gh_username,
      };
      return session;
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                             SESSION HELPER                                 */
/* -------------------------------------------------------------------------- */

export async function getSession() {
  // Required for Next.js App Router (Next 14/15)
  await headers();
  await cookies();

  return getServerSession(authOptions) as Promise<{
    user: {
      id: string;
      name: string;
      username: string;
      email: string;
      image: string;
    };
  } | null>;
}

/* -------------------------------------------------------------------------- */
/*                         SITE-BASED AUTH (SAFE)                              */
/* -------------------------------------------------------------------------- */
/**
 * Preserves original Next Platforms logic:
 * - One user
 * - One site per user
 * - Explicit siteId passed from route
 *
 * Adds HARD GUARDS to prevent Prisma crashes.
 */
export function withSiteAuth(action: any) {
  return async (
    formData: FormData | null,
    siteId: string | undefined,
    key: string | null,
  ) => {
    // 🚨 HARD GUARD — prevents prisma.site.findUnique({ id: undefined })
    if (!siteId) {
      return {
        error: "Missing siteId",
      };
    }

    const session = await getSession();
    if (!session) {
      return {
        error: "Not authenticated",
      };
    }

    const site = await prisma.site.findUnique({
      where: {
        id: siteId,
      },
    });

    if (!site || site.userId !== session.user.id) {
      return {
        error: "Not authorized",
      };
    }

    return action(formData, site, key);
  };
}

/* -------------------------------------------------------------------------- */
/*                         POST-BASED AUTH (SAFE)                              */
/* -------------------------------------------------------------------------- */
/**
 * Blog-era helper (unchanged behavior)
 * Guarded to prevent runtime crashes
 */
export function withPostAuth(action: any) {
  return async (
    formData: FormData | null,
    postId: string | undefined,
    key: string | null,
  ) => {
    if (!postId) {
      return {
        error: "Missing postId",
      };
    }

    const session = await getSession();
    if (!session?.user?.id) {
      return {
        error: "Not authenticated",
      };
    }

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        site: true,
      },
    });

    if (!post || post.userId !== session.user.id) {
      return {
        error: "Post not found or not authorized",
      };
    }

    return action(formData, post, key);
  };
}
