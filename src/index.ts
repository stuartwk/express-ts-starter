import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import { greetings } from "./handlers/greet.js";

const main = async () => {
  console.log("hello world");

  const app: Express = express();
  const port = process.env.PORT ?? "8080";

  app.use(cors());
  app.use(helmet());

  app.get("/greet/:name", greetings);

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
};

main();
