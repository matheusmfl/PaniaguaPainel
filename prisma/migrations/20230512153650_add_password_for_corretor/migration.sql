/*
  Warnings:

  - Added the required column `password` to the `corretor` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_corretor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_corretor" ("email", "id", "name", "token") SELECT "email", "id", "name", "token" FROM "corretor";
DROP TABLE "corretor";
ALTER TABLE "new_corretor" RENAME TO "corretor";
CREATE UNIQUE INDEX "corretor_email_key" ON "corretor"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
