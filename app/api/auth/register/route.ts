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
        { error: "An account with this email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const validRole = ["PATIENT", "ENDOCRINOLOGIST", "PSYCHIATRIST"].includes(role)
      ? (role as Role)
      : Role.PATIENT;

    const validState =
      state && typeof state === "string" && VALID_STATES.has(state as (typeof INDIAN_STATES)[number])
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

    if (validRole === Role.PATIENT) {
      await prisma.profile.create({
        data: { userId: user.id, name: name || null, state: validState },
      });
    }

    if (validRole === Role.ENDOCRINOLOGIST || validRole === Role.PSYCHIATRIST) {
      await prisma.professional.create({
        data: {
          userId: user.id,
          verified: false,
          state: validState,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Registration error:", err);
    return NextResponse.json(
      { error: "Registration failed. Please try again." },
      { status: 500 }
    );
  }
}
