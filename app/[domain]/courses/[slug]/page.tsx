import { getTenantFromHeaders } from "@/lib/tenant";
import { getStudentSession } from "@/lib/student-auth";
import { getCourseBySlug, enrollCourse } from "@/lib/lms-actions";
import { redirect, notFound } from "next/navigation";
import EnrollButton from "./enroll-button";
import LessonList from "./lesson-list";
import prisma from "@/lib/prisma";

export default async function CoursePage({
  params,
}: {
  params: { slug: string };
}) {
  const site = await getTenantFromHeaders();
  const student = await getStudentSession();

  if (!site) {
    return <div>Tenant not found</div>;
  }

  if (!student) {
    redirect("/login");
  }

  const course = await getCourseBySlug(params.slug, site.id);

  if (!course || !course.published) {
    notFound();
  }

  const enrollment = await prisma.enrollment.findUnique({
    where: {
      studentId_courseId: {
        studentId: student.id,
        courseId: course.id,
      },
    },
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">{course.title}</h1>
        {course.description && (
          <p className="mt-4 text-lg text-gray-600">{course.description}</p>
        )}
      </div>

      {!enrollment ? (
        <EnrollButton courseId={course.id} />
      ) : (
        <LessonList courseId={course.id} lessons={course.lessons} />
      )}
    </div>
  );
}
