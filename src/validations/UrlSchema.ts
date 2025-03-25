import { z } from "zod";

const UrlSchema = z.object({
  originalUrl: z.string().url(),
  customurl: z.string().optional(),
});

export { UrlSchema };
