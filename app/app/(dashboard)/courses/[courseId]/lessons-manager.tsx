"use client";

import { createLesson, updateLesson, deleteLesson } from "@/lib/lms-actions";
import { Lesson } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LessonsManager({
  courseId,
  lessons,
}: {
  courseId: string;
  lessons: Lesson[];
}) {
  const router = useRouter();
  const [creating, setCreating] = useState(false);

  const handleCreate = async () => {
    const title = prompt("Lesson title:");
    if (!title) return;

    setCreating(true);
    const order = lessons.length;
    await createLesson(courseId, title, order);
    router.refresh();
    setCreating(false);
  };

  const handleDelete = async (lessonId: string) => {
    if (!confirm("Delete this lesson?")) return;

    await deleteLesson(lessonId);
    router.refresh();
  };

  return (
    <div className="space-y-4 rounded-lg border p-6 dark:border-stone-700">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold dark:text-white">Lessons</h2>
        <button
          onClick={handleCreate}
          disabled={creating}
          className="rounded-md bg-black px-4 py-2 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
        >
          {creating ? "Creating..." : "Add Lesson"}
        </button>
      </div>

      <div className="space-y-2">
        {lessons.map((lesson, index) => (
          <div
            key={lesson.id}
            className="flex items-center justify-between rounded-lg border p-4 dark:border-stone-700"
          >
            <div>
              <span className="text-sm text-gray-500">Lesson {index + 1}</span>
              <h3 className="font-medium dark:text-white">{lesson.title}</h3>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => router.push(`/lessons/${lesson.id}`)}
                className="rounded-md bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200 dark:bg-stone-800"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(lesson.id)}
                className="rounded-md bg-red-100 px-3 py-1 text-sm text-red-600 hover:bg-red-200"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
