import { Router } from "express";
import urlRoutes from "./url-routes";

const routes = Router();

routes.use("/api", urlRoutes);

export { routes };
