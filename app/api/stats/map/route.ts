import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const state = searchParams.get("state");

    // ✅ 1. If state selected → return doctors
    if (state) {
      const doctors = await prisma.professional.findMany({
        where: { location: state }, // 🔥 use location
        orderBy: { createdAt: "desc" },
      });

      return NextResponse.json(doctors);
    }

    // ✅ 2. Patients (from User.state)
    const patients = await prisma.user.findMany({
      where: {
        role: "PATIENT",
        state: { not: null },
      },
      select: { state: true },
    });

    // ✅ 3. Professionals grouped by location
    const professionalGroups = await prisma.professional.groupBy({
      by: ["location"], // 🔥 FIX
      where: { location: { not: null } },
      _count: { id: true },
    });

    // ✅ 4. Totals
    const totalPatients = await prisma.user.count({
      where: { role: "PATIENT" },
    });

    const totalProfessionals = await prisma.professional.count();

    // ✅ 5. Format data
    const patientsByState: Record<string, number> = {};
    const professionalsByState: Record<string, number> = {};

    for (const p of patients) {
      if (p.state) {
        patientsByState[p.state] =
          (patientsByState[p.state] ?? 0) + 1;
      }
    }

    for (const g of professionalGroups) {
      if (g.location) {
        professionalsByState[g.location] = g._count.id;
      }
    }

    return NextResponse.json({
      patientsByState,
      professionalsByState,
      totalPatients,
      totalProfessionals,
    });

  } catch (err) {
    console.error("Map API Error:", err);

    return NextResponse.json(
      {
        patientsByState: {},
        professionalsByState: {},
        totalPatients: 0,
        totalProfessionals: 0,
      },
      { status: 200 }
    );
  }
}