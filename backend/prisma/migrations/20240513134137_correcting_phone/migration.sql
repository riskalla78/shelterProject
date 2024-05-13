/*
  Warnings:

  - You are about to drop the column `phone` on the `necessidades` table. All the data in the column will be lost.
  - Added the required column `phone` to the `abrigos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "abrigos" ADD COLUMN     "phone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "necessidades" DROP COLUMN "phone";
