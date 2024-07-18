import { NestFactory } from "@nestjs/core";
import { log } from "console";
import { AppModule } from "./app.module";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    log("Service started on port " + PORT);
  });
}

start();
