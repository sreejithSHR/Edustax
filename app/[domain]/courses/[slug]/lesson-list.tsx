import { getCourseProgress } from "@/lib/lms-actions";
import Link from "next/link";
import { Lesson } from "@prisma/client";

export default async function LessonList({
  courseId,
  lessons,
}: {
  courseId: string;
  lessons: Lesson[];
}) {
  const progress = await getCourseProgress(courseId);
  const completedIds = new Set(
    progress?.filter((p) => p.completed).map((p) => p.lessonId) || []
  );

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Lessons</h2>
      <div className="space-y-2">
        {lessons.map((lesson) => {
          const isCompleted = completedIds.has(lesson.id);
          return (
            <Link
              key={lesson.id}
              href={`/lessons/${lesson.id}`}
              className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-50"
            >
              <div>
                <h3 className="font-medium">{lesson.title}</h3>
              </div>
              {isCompleted && (
                <span className="text-sm text-green-600">✓ Completed</span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
