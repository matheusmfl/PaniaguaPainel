-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_corretor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT,
    "password" TEXT NOT NULL
);
INSERT INTO "new_corretor" ("email", "id", "name", "password", "token") SELECT "email", "id", "name", "password", "token" FROM "corretor";
DROP TABLE "corretor";
ALTER TABLE "new_corretor" RENAME TO "corretor";
CREATE UNIQUE INDEX "corretor_email_key" ON "corretor"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
