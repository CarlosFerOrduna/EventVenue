import { Router } from "express";
import { EventServiceRoutes } from "./event-service.routes";
import { EventTypeRoutes } from "./event-type.routes";
import { HallRoutes } from "./hall.routes";
import { UserRoutes } from "./user.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/eventservice", EventServiceRoutes.routes);
    router.use("/api/eventtype", EventTypeRoutes.routes);
    router.use("/api/hall", HallRoutes.routes);
    router.use("/api/user", UserRoutes.routes);

    return router;
  }
}
