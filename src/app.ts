import { envs } from "./config";
import { AppRoutes } from "./routes";
import { Server } from "./server";

(async () => {
  await main();
})();

async function main() {
  const server = new Server(envs.PORT, AppRoutes.routes);
  server.start();
}
