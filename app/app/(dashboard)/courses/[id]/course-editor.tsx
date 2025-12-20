"use client";

import { updateCourse } from "@/lib/lms-actions";
import { Course } from "@prisma/client";
import { useState } from "react";

export default function CourseEditor({ course }: { course: Course }) {
  const [title, setTitle] = useState(course.title);
  const [description, setDescription] = useState(course.description || "");
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    await updateCourse(course.id, { title, description });
    setSaving(false);
  };

  return (
    <div className="space-y-4 rounded-lg border p-6 dark:border-stone-700">
      <h2 className="text-xl font-semibold dark:text-white">Course Details</h2>
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
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="mt-1 w-full rounded-md border px-3 py-2 dark:bg-black dark:text-white"
        />
      </div>
      <button
        onClick={handleSave}
        disabled={saving}
        className="rounded-md bg-black px-4 py-2 text-white disabled:opacity-50 dark:bg-white dark:text-black"
      >
        {saving ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
}
