import axios from "axios";
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { AppError } from "../utils/AppError";

const checkSiteMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return next(new AppError("Url parameter is required", 404));
  }

  try {
    const response = await axios.get(originalUrl);
    if (response.status === 200) {
      next();
    } else {
      return next(new AppError("This site doesn't exists or is private", 404));
    }
  } catch (e) {
    return next(new AppError("This site doesn't exists or is private", 404));
  }
};

export { checkSiteMiddleware };
