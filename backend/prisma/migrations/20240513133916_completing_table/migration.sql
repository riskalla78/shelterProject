/*
  Warnings:

  - Added the required column `isAvailable` to the `abrigos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `abrigos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `abrigos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `petFriendly` to the `abrigos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "abrigos" ADD COLUMN     "isAvailable" BOOLEAN NOT NULL,
ADD COLUMN     "latitude" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "longitude" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "petFriendly" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "necessidades" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "necessidades_pkey" PRIMARY KEY ("id")
);
