import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// ✅ GET — fetch only THIS doctor's profile
export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const profile = await prisma.professional.findUnique({
    where: { userId: session.user.id },
  });

  return NextResponse.json(profile ?? {});
}

// ✅ POST — upsert (create first time, update next time)
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();

    const file = formData.get("file") as File;
    let imagePath: string | undefined = undefined;

    // ✅ Save new image only if a new file was uploaded
    if (file && file.size > 0) {
      const uploadDir = path.join(process.cwd(), "public/uploads");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileName = Date.now() + "-" + file.name;
      const uploadPath = path.join(uploadDir, fileName);
      fs.writeFileSync(uploadPath, buffer);
      imagePath = `/uploads/${fileName}`;
    }

    const data = {
      name:        formData.get("name")        as string,
      specialty:   formData.get("specialty")   as string,
      credentials: formData.get("credentials") as string,
      location:    formData.get("location")    as string,
      languages:   formData.get("languages")   as string,
      type:        formData.get("type")        as string,
      phone:       formData.get("phone")       as string,
      email:       formData.get("email")       as string,
      address:     formData.get("address")     as string,
      bio:         formData.get("bio")         as string,
      // ✅ Only overwrite image if a new one was uploaded
      ...(imagePath && { image: imagePath }),
    };

    // ✅ UPSERT — updates if exists, creates if not
    const profile = await prisma.professional.upsert({
      where: {
        userId: session.user.id,
      },
      update: {
        ...data,
      },
      create: {
        ...data,
        userId: session.user.id,
      },
    });

    return NextResponse.json(profile);

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}