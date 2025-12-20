import { redirect } from "next/navigation";
import { getTenantFromHeaders } from "@/lib/tenant";
import { getStudentSession } from "@/lib/student-auth";
import StudentSignupForm from "./student-signup-form";

export default async function StudentSignupPage() {
  const site = await getTenantFromHeaders();
  const student = await getStudentSession();

  if (!site) {
    return <div>Tenant not found</div>;
  }

  if (student) {
    redirect("/courses");
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-lg border p-8">
        <div>
          <h2 className="text-center text-3xl font-bold">
            Join {site.name}
          </h2>
        </div>
        <StudentSignupForm siteId={site.id} />
        <div className="text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="font-medium underline">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}
