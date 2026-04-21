import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    const user = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        name: body.name,
        state: body.state,
      },
    });

    return NextResponse.json(user);

  } catch (err) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}