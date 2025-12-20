"use client";

import { updateLesson } from "@/lib/lms-actions";
import { Lesson } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LessonEditor({
  lesson,
  courseId,
}: {
  lesson: Lesson;
  courseId: string;
}) {
  const [title, setTitle] = useState(lesson.title);
  const [content, setContent] = useState(lesson.content || "");
  const [videoUrl, setVideoUrl] = useState(lesson.videoUrl || "");
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  const handleSave = async () => {
    setSaving(true);
    await updateLesson(lesson.id, { title, content, videoUrl });
    setSaving(false);
    router.push(`/courses/${courseId}`);
  };

  return (
    <div className="space-y-6 rounded-lg border p-6 dark:border-stone-700">
      <div>
        <label className="block text-sm font-medium dark:text-white">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 w-full rounded-md border px-3 py-2 dark:bg-black dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium dark:text-white">
          Video URL
        </label>
        <input
          type="url"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="https://..."
          className="mt-1 w-full rounded-md border px-3 py-2 dark:bg-black dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium dark:text-white">
          Content
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={12}
          className="mt-1 w-full rounded-md border px-3 py-2 font-mono dark:bg-black dark:text-white"
        />
      </div>

      <button
        onClick={handleSave}
        disabled={saving}
        className="rounded-md bg-black px-4 py-2 text-white disabled:opacity-50 dark:bg-white dark:text-black"
      >
        {saving ? "Saving..." : "Save & Return"}
      </button>
    </div>
  );
}
