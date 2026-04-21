import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function GET() {
  return NextResponse.json({ message: "Register API Working ✅" });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    let { name, email, password, role, state } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email and password are required" },
        { status: 400 }
      );
    }

    const emailNormalized = email.trim().toLowerCase();

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    // ✅ ONLY 2 ROLES
    const safeRole = role === "DOCTOR" ? "DOCTOR" : "PATIENT";

    const existingUser = await prisma.user.findUnique({
      where: { email: emailNormalized },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: emailNormalized,
        password: hashedPassword,
        role: safeRole,
        state: state || null,
      },
    });

    // ✅ CREATE DOCTOR PROFILE ONLY FOR DOCTOR
    if (safeRole === "DOCTOR") {
      await prisma.professional.create({
        data: {
          userId: user.id,
          name: user.name,
          email: user.email,
        },
      });
    }

    return NextResponse.json({
      success: true,
      userId: user.id,
      role: user.role,
    });

  } catch (error) {
    console.error("REGISTER ERROR:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}