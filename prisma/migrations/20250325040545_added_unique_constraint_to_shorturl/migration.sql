/*
  Warnings:

  - A unique constraint covering the columns `[shortURl]` on the table `Url` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Url_shortURl_key" ON "Url"("shortURl");
