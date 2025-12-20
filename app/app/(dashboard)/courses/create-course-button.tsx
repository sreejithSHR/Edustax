"use client";

import { createCourse } from "@/lib/lms-actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateCourseButton({ siteId }: { siteId: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCreate = async () => {
    const title = prompt("Course title:");
    if (!title) return;

    setLoading(true);
    const result = await createCourse(siteId, title);

    if ("error" in result) {
      alert(result.error);
      setLoading(false);
    } else {
      router.push(`/courses/${result.id}`);
      router.refresh();
    }
  };

  return (
    <button
      onClick={handleCreate}
      disabled={loading}
      className="rounded-lg border border-black bg-black px-4 py-2 text-sm text-white hover:bg-white hover:text-black disabled:opacity-50"
    >
      {loading ? "Creating..." : "Create Course"}
    </button>
  );
}
