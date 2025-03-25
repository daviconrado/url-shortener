import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";

const prisma = new PrismaClient();

async function shortenUrl(originalUrl: string) {
  const shortUrl = nanoid(7);

  const newUrl = prisma.url.create({
    data: {
      originalUrl,
      shortUrl,
    },
  });

  return newUrl;
}

async function getOriginalUrl(shortUrl: string) {
  return await prisma.url.findUnique({
    where: {
      shortUrl,
    },
  });
}

export { shortenUrl, getOriginalUrl };
