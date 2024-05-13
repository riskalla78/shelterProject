/*
  Warnings:

  - You are about to drop the `necessidades_abrigos` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `shelterId` to the `necessidades` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "necessidades_abrigos" DROP CONSTRAINT "necessidades_abrigos_needId_fkey";

-- DropForeignKey
ALTER TABLE "necessidades_abrigos" DROP CONSTRAINT "necessidades_abrigos_shelterId_fkey";

-- AlterTable
ALTER TABLE "necessidades" ADD COLUMN     "shelterId" TEXT NOT NULL;

-- DropTable
DROP TABLE "necessidades_abrigos";

-- AddForeignKey
ALTER TABLE "necessidades" ADD CONSTRAINT "necessidades_shelterId_fkey" FOREIGN KEY ("shelterId") REFERENCES "abrigos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
