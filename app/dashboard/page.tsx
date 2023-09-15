import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ProfilForm } from "./ProfilForm";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  const currentUserEmail = session?.user?.email!;
  const user = prisma.user.findUnique({
    where: { email: currentUserEmail },
  });

  return (
    <>
      <h1>Dashboard</h1>
      <ProfilForm user={user} />
    </>
  );
}
