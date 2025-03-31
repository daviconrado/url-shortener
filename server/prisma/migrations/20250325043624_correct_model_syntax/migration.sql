/*
  Warnings:

  - You are about to drop the column `shortURl` on the `Url` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[shortUrl]` on the table `Url` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shortUrl` to the `Url` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Url_shortURl_key";

-- AlterTable
ALTER TABLE "Url" DROP COLUMN "shortURl",
ADD COLUMN     "shortUrl" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Url_shortUrl_key" ON "Url"("shortUrl");
