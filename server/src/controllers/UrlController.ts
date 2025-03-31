import { Request, Response, NextFunction } from "express";
import { shortenUrl, getOriginalUrl } from "../services/url-services";
import { UrlSchema } from "../validations/UrlSchema";
import { AppError } from "../utils/AppError";

export class UrlController {
  async redirectOriginalUrl(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      if (!id) {
        return next(new AppError("Url not found", 404));
      }
      const originalUrl = await getOriginalUrl(id);

      if (!originalUrl) {
        return next(new AppError("Url not found", 404));
      }

      res.redirect(originalUrl.originalUrl);
    } catch (error) {
      return next(new AppError("Internal server error", 404));
    }
  }

  async createShortUrl(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      if (!data || Object.keys(data).length === 0) {
        return next(
          new AppError("Request body is required for this endpoint", 400)
        );
      }
      const validatedZodData = UrlSchema.parse(data);

      const shortUrl = await shortenUrl(validatedZodData.originalUrl);
      res.json(shortUrl);
    } catch (error) {
      return next(new AppError("Internal server error", 500));
    }
  }
}
