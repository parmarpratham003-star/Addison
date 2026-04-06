import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";
import { Role } from "@prisma/client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // ✅ NO adapter here

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },

  pages: {
    signIn: "/login",
  },

  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) return null;

          const user = await prisma.user.findUnique({
            where: { email: credentials.email as string },
          });

          if (!user || !user.password) return null;

          const valid = await bcrypt.compare(
            credentials.password as string,
            user.password
          );

          if (!valid) return null;

          // ✅ RETURN ONLY SAFE FIELDS
          return {
            id: user.id,
            email: user.email,
            name: user.name ?? "",
          };
        } catch (error) {
          console.error("AUTH ERROR:", error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;

        // get role from DB (safe way)
        const dbUser = await prisma.user.findUnique({
          where: { email: token.email! },
        });

        token.role = dbUser?.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        (session.user as { id?: string }).id = token.id as string;
        (session.user as { role?: Role }).role = token.role as Role;
      }
      return session;
    },
  },
});