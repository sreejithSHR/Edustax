import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Link from "next/link";
import CreateCourseButton from "./create-course-button";

export default async function AdminCoursesPage() {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }

  const sites = await prisma.site.findMany({
    where: { userId: session.user.id },
    include: {
      courses: {
        orderBy: { createdAt: "desc" },
      },
    },
  });

  return (
    <div className="flex max-w-screen-xl flex-col space-y-12 p-8">
      <div className="flex items-center justify-between">
        <h1 className="font-cal text-3xl font-bold dark:text-white">
          Courses
        </h1>
      </div>

      {sites.map((site) => (
        <div key={site.id} className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold dark:text-white">
              {site.name}
            </h2>
            <CreateCourseButton siteId={site.id} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {site.courses.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="rounded-lg border p-6 hover:shadow-lg dark:border-stone-700"
              >
                <h3 className="text-xl font-semibold dark:text-white">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {course.published ? "Published" : "Draft"}
                </p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
