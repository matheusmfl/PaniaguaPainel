/*
  Warnings:

  - Added the required column `password` to the `corretor` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_corretor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_corretor" ("id", "isAdmin", "name", "username") SELECT "id", "isAdmin", "name", "username" FROM "corretor";
DROP TABLE "corretor";
ALTER TABLE "new_corretor" RENAME TO "corretor";
CREATE UNIQUE INDEX "corretor_username_key" ON "corretor"("username");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
