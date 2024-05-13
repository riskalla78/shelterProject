-- CreateTable
CREATE TABLE "necessidades_abrigos" (
    "id" TEXT NOT NULL,
    "shelterId" TEXT NOT NULL,
    "needId" TEXT NOT NULL,

    CONSTRAINT "necessidades_abrigos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "necessidades_abrigos" ADD CONSTRAINT "necessidades_abrigos_shelterId_fkey" FOREIGN KEY ("shelterId") REFERENCES "abrigos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "necessidades_abrigos" ADD CONSTRAINT "necessidades_abrigos_needId_fkey" FOREIGN KEY ("needId") REFERENCES "necessidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
