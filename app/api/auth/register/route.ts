import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { Role } from "@prisma/client";
import { INDIAN_STATES } from "@/lib/indian-states";

const VALID_STATES = new Set(INDIAN_STATES);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, role, state } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const validRole = ["PATIENT", "ENDOCRINOLOGIST", "PSYCHIATRIST"].includes(role)
      ? (role as Role)
      : Role.PATIENT;

    const validState =
      state && typeof state === "string" && VALID_STATES.has(state)
        ? state
        : null;

    const user = await prisma.user.create({
      data: {
        name: name || null,
        email,
        password: hashedPassword,
        role: validRole,
      },
    });

    return NextResponse.json({ success: true, userId: user.id });

  } catch (err) {
    console.error("Registration error:", err);
    return NextResponse.json(
      { error: "Registration failed" },
      { status: 500 }
    );
  }
}