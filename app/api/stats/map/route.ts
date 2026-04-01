import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { INDIAN_STATES } from "@/lib/indian-states";

const VALID_STATES = new Set(INDIAN_STATES);

export async function GET() {
  try {
    const [patientProfiles, professionalGroups, totalPatients, totalProfessionals] =
      await Promise.all([
        prisma.profile.findMany({
          where: { user: { role: "PATIENT" }, state: { not: null } },
          select: { state: true },
        }),
        prisma.professional.groupBy({
          by: ["state"],
          where: { state: { not: null } },
          _count: { id: true },
        }),
        prisma.user.count({ where: { role: "PATIENT" } }),
        prisma.professional.count(),
      ]);

    const patientsByState: Record<string, number> = {};
    const professionalsByState: Record<string, number> = {};

    for (const p of patientProfiles) {
      if (p.state && VALID_STATES.has(p.state as (typeof INDIAN_STATES)[number])) {
        patientsByState[p.state] = (patientsByState[p.state] ?? 0) + 1;
      }
    }

    for (const g of professionalGroups) {
      if (g.state && VALID_STATES.has(g.state as (typeof INDIAN_STATES)[number])) {
        professionalsByState[g.state] = g._count.id;
      }
    }

    return NextResponse.json({
      patientsByState,
      professionalsByState,
      totalPatients,
      totalProfessionals,
    });
  } catch (err) {
    console.error("Map stats error:", err);
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
