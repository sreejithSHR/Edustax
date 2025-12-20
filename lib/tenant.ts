import { headers } from "next/headers";
import prisma from "@/lib/prisma";

export async function getTenantFromHeaders() {
  const headersList = headers();
  const subdomain = headersList.get("x-tenant-subdomain");

  if (!subdomain) return null;

  const site = await prisma.site.findUnique({
    where: { subdomain },
  });

  return site;
}
