import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

// ✅ GET (for testing in browser)
export async function GET() {
  return NextResponse.json({ message: "Register API Working ✅" });
}

// ✅ POST (actual register)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, role } = body;

    // ✅ validation
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // ✅ check existing user
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // ✅ hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ create user
    const user = await prisma.user.create({
      data: {
        name: name || null,
        email,
        password: hashedPassword,
        role: role || "PATIENT",
      },
    });

    return NextResponse.json({
      success: true,
      userId: user.id,
    });

  } catch (error) {
    console.error("REGISTER ERROR:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}