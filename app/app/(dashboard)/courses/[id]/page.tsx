import { getSession } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import CourseEditor from "./course-editor";
import LessonsManager from "./lessons-manager";
import PublishButton from "./publish-button";

export default async function AdminCoursePage({
  params,
}: {
  params: { id: string };
}) {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }

  const course = await prisma.course.findUnique({
    where: { id: params.id },
    include: {
      site: true,
      lessons: {
        orderBy: { order: "asc" },
      },
    },
  });

  if (!course || course.site.userId !== session.user.id) {
    notFound();
  }

  return (
    <div className="flex max-w-screen-xl flex-col space-y-12 p-8">
      <div className="flex items-center justify-between">
        <h1 className="font-cal text-3xl font-bold dark:text-white">
          {course.title}
        </h1>
        <PublishButton
          courseId={course.id}
          published={course.published}
        />
      </div>

      <CourseEditor course={course} />
      <LessonsManager courseId={course.id} lessons={course.lessons} />
    </div>
  );
}
