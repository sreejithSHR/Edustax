"use client";

import { markLessonComplete } from "@/lib/lms-actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MarkCompleteButton({
  lessonId,
  courseSlug,
  isCompleted,
}: {
  lessonId: string;
  courseSlug: string;
  isCompleted: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleComplete = async () => {
    setLoading(true);
    await markLessonComplete(lessonId);
    router.push(`/courses/${courseSlug}`);
    router.refresh();
  };

  if (isCompleted) {
    return (
      <div className="flex items-center gap-2 text-green-600">
        <span>✓</span>
        <span>Lesson completed</span>
      </div>
    );
  }

  return (
    <button
      onClick={handleComplete}
      disabled={loading}
      className="rounded-md bg-black px-6 py-3 text-white disabled:opacity-50"
    >
      {loading ? "Marking complete..." : "Mark as Complete"}
    </button>
  );
}
