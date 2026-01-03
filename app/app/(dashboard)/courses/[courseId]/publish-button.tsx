"use client";

import { publishCourse } from "@/lib/lms-actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PublishButton({
  courseId,
  published,
}: {
  courseId: string;
  published: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleToggle = async () => {
    setLoading(true);
    await publishCourse(courseId, !published);
    router.refresh();
    setLoading(false);
  };

  return (
    <button
      onClick={handleToggle}
      disabled={loading}
      className="rounded-md border border-black bg-black px-4 py-2 text-white hover:bg-white hover:text-black disabled:opacity-50"
    >
      {loading
        ? "Updating..."
        : published
        ? "Unpublish"
        : "Publish"}
    </button>
  );
}
