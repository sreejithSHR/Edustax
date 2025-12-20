"use server";

import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { getStudentSession } from "@/lib/student-auth";
import { revalidatePath } from "next/cache";

// Admin: Course CRUD

export async function createCourse(siteId: string, title: string) {
  const session = await getSession();
  if (!session) return { error: "Not authenticated" };

  const site = await prisma.site.findUnique({ where: { id: siteId } });
  if (!site || site.userId !== session.user.id) {
    return { error: "Not authorized" };
  }

  const slug = title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  const course = await prisma.course.create({
    data: {
      title,
      slug,
      siteId,
    },
  });

  return course;
}

export async function updateCourse(
  courseId: string,
  data: { title?: string; description?: string; image?: string },
) {
  const session = await getSession();
  if (!session) return { error: "Not authenticated" };

  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: { site: true },
  });

  if (!course || course.site.userId !== session.user.id) {
    return { error: "Not authorized" };
  }

  const updated = await prisma.course.update({
    where: { id: courseId },
    data,
  });

  return updated;
}

export async function publishCourse(courseId: string, published: boolean) {
  const session = await getSession();
  if (!session) return { error: "Not authenticated" };

  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: { site: true },
  });

  if (!course || course.site.userId !== session.user.id) {
    return { error: "Not authorized" };
  }

  const updated = await prisma.course.update({
    where: { id: courseId },
    data: { published },
  });

  revalidatePath(`/${course.site.subdomain}`);

  return updated;
}

export async function deleteCourse(courseId: string) {
  const session = await getSession();
  if (!session) return { error: "Not authenticated" };

  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: { site: true },
  });

  if (!course || course.site.userId !== session.user.id) {
    return { error: "Not authorized" };
  }

  await prisma.course.delete({ where: { id: courseId } });

  return { success: true };
}

// Admin: Lesson CRUD

export async function createLesson(
  courseId: string,
  title: string,
  order: number,
) {
  const session = await getSession();
  if (!session) return { error: "Not authenticated" };

  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: { site: true },
  });

  if (!course || course.site.userId !== session.user.id) {
    return { error: "Not authorized" };
  }

  const lesson = await prisma.lesson.create({
    data: {
      title,
      order,
      courseId,
    },
  });

  return lesson;
}

export async function updateLesson(
  lessonId: string,
  data: { title?: string; content?: string; videoUrl?: string; order?: number },
) {
  const session = await getSession();
  if (!session) return { error: "Not authenticated" };

  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: { course: { include: { site: true } } },
  });

  if (!lesson || lesson.course.site.userId !== session.user.id) {
    return { error: "Not authorized" };
  }

  const updated = await prisma.lesson.update({
    where: { id: lessonId },
    data,
  });

  return updated;
}

export async function deleteLesson(lessonId: string) {
  const session = await getSession();
  if (!session) return { error: "Not authenticated" };

  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: { course: { include: { site: true } } },
  });

  if (!lesson || lesson.course.site.userId !== session.user.id) {
    return { error: "Not authorized" };
  }

  await prisma.lesson.delete({ where: { id: lessonId } });

  return { success: true };
}

// Student: Enrollment

export async function enrollCourse(courseId: string) {
  const student = await getStudentSession();
  if (!student) return { error: "Not authenticated" };

  const course = await prisma.course.findUnique({
    where: { id: courseId },
  });

  if (!course || !course.published || course.siteId !== student.siteId) {
    return { error: "Course not available" };
  }

  const existing = await prisma.enrollment.findUnique({
    where: {
      studentId_courseId: {
        studentId: student.id,
        courseId,
      },
    },
  });

  if (existing) {
    return { error: "Already enrolled" };
  }

  const enrollment = await prisma.enrollment.create({
    data: {
      studentId: student.id,
      courseId,
    },
  });

  return enrollment;
}

export async function getStudentEnrollments() {
  const student = await getStudentSession();
  if (!student) return [];

  return prisma.enrollment.findMany({
    where: { studentId: student.id },
    include: {
      course: {
        include: {
          lessons: {
            orderBy: { order: "asc" },
          },
        },
      },
    },
  });
}

// Student: Progress

export async function markLessonComplete(lessonId: string) {
  const student = await getStudentSession();
  if (!student) return { error: "Not authenticated" };

  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: { course: true },
  });

  if (!lesson || lesson.course.siteId !== student.siteId) {
    return { error: "Lesson not found" };
  }

  const enrollment = await prisma.enrollment.findUnique({
    where: {
      studentId_courseId: {
        studentId: student.id,
        courseId: lesson.courseId,
      },
    },
  });

  if (!enrollment) {
    return { error: "Not enrolled" };
  }

  const progress = await prisma.progress.upsert({
    where: {
      studentId_lessonId: {
        studentId: student.id,
        lessonId,
      },
    },
    update: {
      completed: true,
      completedAt: new Date(),
    },
    create: {
      studentId: student.id,
      lessonId,
      completed: true,
      completedAt: new Date(),
    },
  });

  return progress;
}

export async function getCourseProgress(courseId: string) {
  const student = await getStudentSession();
  if (!student) return null;

  const progress = await prisma.progress.findMany({
    where: {
      studentId: student.id,
      lesson: {
        courseId,
      },
    },
  });

  return progress;
}

// Public: Get published courses

export async function getPublishedCourses(siteId: string) {
  return prisma.course.findMany({
    where: {
      siteId,
      published: true,
    },
    include: {
      lessons: {
        orderBy: { order: "asc" },
      },
    },
  });
}

export async function getCourseBySlug(slug: string, siteId: string) {
  return prisma.course.findUnique({
    where: {
      slug_siteId: { slug, siteId },
    },
    include: {
      lessons: {
        orderBy: { order: "asc" },
      },
    },
  });
}
