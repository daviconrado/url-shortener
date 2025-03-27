import { Router } from "express";
import { UrlController } from "../controllers/UrlController";
import { checkSiteMiddleware } from "../services/check-site";

const urlRoutes = Router();
const urlController = new UrlController();

urlRoutes.get("/:id", urlController.redirectOriginalUrl);
urlRoutes.post("", checkSiteMiddleware, urlController.createShortUrl);

export default urlRoutes;
