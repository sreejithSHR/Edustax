import { getSession } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import LessonEditor from "./lesson-editor";

export default async function AdminLessonPage({
  params,
}: {
  params: { id: string };
}) {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }

  const lesson = await prisma.lesson.findUnique({
    where: { id: params.id },
    include: {
      course: {
        include: { site: true },
      },
    },
  });

  if (!lesson || lesson.course.site.userId !== session.user.id) {
    notFound();
  }

  return (
    <div className="flex max-w-screen-xl flex-col space-y-6 p-8">
      <h1 className="font-cal text-3xl font-bold dark:text-white">
        Edit Lesson
      </h1>
      <LessonEditor lesson={lesson} courseId={lesson.courseId} />
    </div>
  );
}
