import express from "express";
import cors from "cors";
import { routes } from "./routes";
import { errorHandler } from "./middlewares/error-handler";
import path from "path";

const PORT = 3333;

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: "http://localhost:5000" })); // Porta do React
}

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "client/dist")));

  // Todas as rotas não-API direcionam para o React
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

app.use(express.json());

app.use(routes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
