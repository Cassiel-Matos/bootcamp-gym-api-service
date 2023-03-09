/*
  Warnings:

  - You are about to drop the `ListaExcersise` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ListaExcersise";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ListExcersise" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "Iduser" TEXT NOT NULL,
    CONSTRAINT "ListExcersise_Iduser_fkey" FOREIGN KEY ("Iduser") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_excersise" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "userId" TEXT NOT NULL,
    "id_list" TEXT NOT NULL,
    CONSTRAINT "excersise_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "excersise_id_list_fkey" FOREIGN KEY ("id_list") REFERENCES "ListExcersise" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_excersise" ("createdAt", "deletedAt", "id", "id_list", "name", "updatedAt", "userId") SELECT "createdAt", "deletedAt", "id", "id_list", "name", "updatedAt", "userId" FROM "excersise";
DROP TABLE "excersise";
ALTER TABLE "new_excersise" RENAME TO "excersise";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
