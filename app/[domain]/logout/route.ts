import { studentSignOut } from "@/lib/student-auth";
import { redirect } from "next/navigation";

export async function GET() {
  await studentSignOut();
  redirect("/login");
}
