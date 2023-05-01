/*
  Warnings:

  - You are about to drop the column `username` on the `corretor` table. All the data in the column will be lost.
  - Added the required column `email` to the `corretor` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_corretor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_corretor" ("id", "isAdmin", "name", "password") SELECT "id", "isAdmin", "name", "password" FROM "corretor";
DROP TABLE "corretor";
ALTER TABLE "new_corretor" RENAME TO "corretor";
CREATE UNIQUE INDEX "corretor_email_key" ON "corretor"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
