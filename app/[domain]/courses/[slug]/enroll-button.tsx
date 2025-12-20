"use client";

import { enrollCourse } from "@/lib/lms-actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EnrollButton({ courseId }: { courseId: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleEnroll = async () => {
    setLoading(true);
    const result = await enrollCourse(courseId);

    if (result.error) {
      alert(result.error);
      setLoading(false);
    } else {
      router.refresh();
    }
  };

  return (
    <button
      onClick={handleEnroll}
      disabled={loading}
      className="rounded-md bg-black px-6 py-3 text-white disabled:opacity-50"
    >
      {loading ? "Enrolling..." : "Enroll in Course"}
    </button>
  );
}
