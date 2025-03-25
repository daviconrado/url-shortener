import { Router } from "express";
import { UrlController } from "../controllers/UrlController";

const urlRoutes = Router();
const urlController = new UrlController();

urlRoutes.get("/:id", urlController.redirectOriginalUrl);
urlRoutes.post("", urlController.createShortUrl);

export default urlRoutes;
