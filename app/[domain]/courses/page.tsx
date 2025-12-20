import { getTenantFromHeaders } from "@/lib/tenant";
import { getStudentSession } from "@/lib/student-auth";
import { getPublishedCourses, getStudentEnrollments } from "@/lib/lms-actions";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function StudentCoursesPage() {
  const site = await getTenantFromHeaders();
  const student = await getStudentSession();

  if (!site) {
    return <div>Tenant not found</div>;
  }

  if (!student) {
    redirect("/login");
  }

  const [courses, enrollments] = await Promise.all([
    getPublishedCourses(site.id),
    getStudentEnrollments(),
  ]);

  const enrolledIds = new Set(enrollments.map((e) => e.courseId));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Courses</h1>
        <Link
          href="/logout"
          className="rounded-md bg-gray-200 px-4 py-2 text-sm"
        >
          Logout
        </Link>
      </div>

      {enrollments.length > 0 && (
        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">My Courses</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {enrollments.map((enrollment) => (
              <Link
                key={enrollment.id}
                href={`/courses/${enrollment.course.slug}`}
                className="rounded-lg border p-6 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold">
                  {enrollment.course.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {enrollment.course.lessons.length} lessons
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div>
        <h2 className="mb-4 text-2xl font-semibold">Available Courses</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses
            .filter((c) => !enrolledIds.has(c.id))
            .map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.slug}`}
                className="rounded-lg border p-6 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  {course.description}
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  {course.lessons.length} lessons
                </p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
