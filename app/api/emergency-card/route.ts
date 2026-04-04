import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// ✅ GET Emergency Card
export async function GET() {
  try {
    const session = await auth();

    // 🔒 Check authentication
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const card = await prisma.emergencyCard.findFirst({
      where: { userId: session.user.id },
      orderBy: { updatedAt: "desc" },
    });

    return NextResponse.json({
      success: true,
      data: card || null,
    });
  } catch (error) {
    console.error("GET ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

// ✅ CREATE / UPDATE Emergency Card
export async function POST(request: Request) {
  try {
    const session = await auth();

    // 🔒 Check authentication
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    let body;

    // ⚠️ Safe JSON parsing (prevents crash)
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    const {
      name,
      emergencyContact,
      medications,
      doctorContact,
      allergies,
      additionalInfo,
    } = body;

    // 🧪 Validation
    if (!name || !emergencyContact || !medications) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, emergency contact, and medications are required",
        },
        { status: 400 }
      );
    }

    // 🔍 Check existing card
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

    return NextResponse.json({
      success: true,
      message: "Saved successfully",
    });
  } catch (error) {
    console.error("POST ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}