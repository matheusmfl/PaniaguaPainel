-- CreateTable
CREATE TABLE "corretor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "observations" TEXT
);

-- CreateTable
CREATE TABLE "proposta" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "numeroProposta" TEXT NOT NULL,
    "seguradora" TEXT NOT NULL,
    "dataVencimento" DATETIME NOT NULL,
    "corretorId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    CONSTRAINT "proposta_corretorId_fkey" FOREIGN KEY ("corretorId") REFERENCES "corretor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "proposta_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "corretor_username_key" ON "corretor"("username");
