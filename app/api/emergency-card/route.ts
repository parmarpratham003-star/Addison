import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const card = await prisma.emergencyCard.findFirst({
      where: { userId: session.user.id },
      orderBy: { updatedAt: "desc" },
    });
    return NextResponse.json(card ?? null);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await request.json();
    const { name, emergencyContact, medications, doctorContact, allergies, additionalInfo } =
      body;

    if (!name || !emergencyContact || !medications) {
      return NextResponse.json(
        { error: "Name, emergency contact, and medications are required" },
        { status: 400 }
      );
    }

    const existing = await prisma.emergencyCard.findFirst({
      where: { userId: session.user.id },
    });

    const data = {
      userId: session.user.id,
      name,
      emergencyContact,
      medications,
      doctorContact: doctorContact || null,
      allergies: allergies || null,
      additionalInfo: additionalInfo || null,
    };

    if (existing) {
      await prisma.emergencyCard.update({
        where: { id: existing.id },
        data,
      });
    } else {
      await prisma.emergencyCard.create({ data });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
