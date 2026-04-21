import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  // 🔐 Not logged in → login
  if (!session?.user) {
    redirect("/login?callbackUrl=/dashboard");
  }

  const role = session.user?.role || "PATIENT";

  // ✅ Single clean redirect
  redirect(
    role === "PATIENT"
      ? "/dashboard/patient"
      : "/dashboard/doctor"
  );
}