import { Router } from "express";
import urlRoutes from "./url-routes";

const routes = Router();

routes.use("", urlRoutes);

export { routes };
