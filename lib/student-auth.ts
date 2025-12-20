"use server";

import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { compare, hash } from "bcryptjs";

const SESSION_COOKIE = "student-session";
const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days

export async function getStudentSession() {
  const cookieStore = cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;

  if (!token) return null;

  const session = await prisma.studentSession.findUnique({
    where: { token },
    include: { student: true },
  });

  if (!session || session.expires < new Date()) {
    return null;
  }

  return session.student;
}

export async function studentSignUp(
  email: string,
  password: string,
  name: string,
  siteId: string,
) {
  const existing = await prisma.student.findUnique({
    where: { email_siteId: { email, siteId } },
  });

  if (existing) {
    return { error: "Student already exists" };
  }

  const passwordHash = await hash(password, 10);

  const student = await prisma.student.create({
    data: {
      email,
      passwordHash,
      name,
      siteId,
    },
  });

  await createStudentSession(student.id);

  return { success: true };
}

export async function studentSignIn(
  email: string,
  password: string,
  siteId: string,
) {
  const student = await prisma.student.findUnique({
    where: { email_siteId: { email, siteId } },
  });

  if (!student) {
    return { error: "Invalid credentials" };
  }

  const valid = await compare(password, student.passwordHash);
  if (!valid) {
    return { error: "Invalid credentials" };
  }

  await createStudentSession(student.id);

  return { success: true };
}

export async function studentSignOut() {
  const cookieStore = cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;

  if (token) {
    await prisma.studentSession.delete({ where: { token } }).catch(() => {});
  }

  cookieStore.delete(SESSION_COOKIE);
}

async function createStudentSession(studentId: string) {
  const token = generateToken();
  const expires = new Date(Date.now() + SESSION_DURATION);

  await prisma.studentSession.create({
    data: {
      studentId,
      token,
      expires,
    },
  });

  const cookieStore = cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires,
    path: "/",
  });
}

function generateToken(): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(32)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
