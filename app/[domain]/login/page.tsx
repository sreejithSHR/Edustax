import { redirect } from "next/navigation";
import { getTenantFromHeaders } from "@/lib/tenant";
import { getStudentSession } from "@/lib/student-auth";
import StudentLoginForm from "./student-login-form";

export default async function StudentLoginPage() {
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
          <h2 className="text-center text-3xl text-white font-bold">
            Sign in to {site.name}
          </h2>
        </div>
        <StudentLoginForm siteId={site.id} />
        <div className="text-center text-white text-sm">
          Don't have an account?{" "}
          <a href="/signup" className="font-medium text-white underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
