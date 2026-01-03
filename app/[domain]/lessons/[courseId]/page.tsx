import { getTenantFromHeaders } from "@/lib/tenant";
import { getStudentSession } from "@/lib/student-auth";
import { redirect, notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import MarkCompleteButton from "./mark-complete-button";

export default async function LessonPage({
  params,
}: {
  params: { courseId: string };
}) {
  const site = await getTenantFromHeaders();
  const student = await getStudentSession();

  if (!site || !student) {
    redirect("/login");
  }

  const lesson = await prisma.lesson.findUnique({
    where: { id: params.courseId },
    include: { course: true },
  });

  if (!lesson || lesson.course.siteId !== site.id) {
    notFound();
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
    redirect(`/courses/${lesson.course.slug}`);
  }

  const progress = await prisma.progress.findUnique({
    where: {
      studentId_lessonId: {
        studentId: student.id,
        lessonId: lesson.id,
      },
    },
  });

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{lesson.title}</h1>
      </div>

      {lesson.videoUrl && (
        <div className="mb-8">
          <video
            src={lesson.videoUrl}
            controls
            className="w-full rounded-lg"
          />
        </div>
      )}

      {lesson.content && (
        <div
          className="prose mb-8 max-w-none"
          dangerouslySetInnerHTML={{ __html: lesson.content }}
        />
      )}

      <MarkCompleteButton
        lessonId={lesson.id}
        courseSlug={lesson.course.slug}
        isCompleted={progress?.completed || false}
      />
    </div>
  );
}
