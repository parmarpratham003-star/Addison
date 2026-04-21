/*
  Warnings:

  - You are about to drop the column `state` on the `Professional` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Professional" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT,
    "specialty" TEXT,
    "credentials" TEXT,
    "location" TEXT,
    "languages" TEXT,
    "bio" TEXT,
    "type" TEXT,
    "speciality" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "address" TEXT,
    "image" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Professional_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Professional" ("bio", "createdAt", "credentials", "id", "languages", "location", "specialty", "updatedAt", "userId", "verified") SELECT "bio", "createdAt", "credentials", "id", "languages", "location", "specialty", "updatedAt", "userId", "verified" FROM "Professional";
DROP TABLE "Professional";
ALTER TABLE "new_Professional" RENAME TO "Professional";
CREATE UNIQUE INDEX "Professional_userId_key" ON "Professional"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
