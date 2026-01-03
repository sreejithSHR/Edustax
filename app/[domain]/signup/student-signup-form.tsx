"use client";

import { studentSignUp } from "@/lib/student-auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function StudentSignupForm({ siteId }: { siteId: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await studentSignUp(email, password, name, siteId);

    if (result.error) {
      setError(result.error);
      setLoading(false);
    } else {
      router.push("/courses");
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-800">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="name" className="block text-white text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-white  text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-white text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full rounded-md border px-3 py-2"
          minLength={6}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {loading ? "Creating account..." : "Sign up"}
      </button>
    </form>
  );
}
