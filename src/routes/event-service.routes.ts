import { Router } from "express";
import { EventServiceController } from "../controllers";
import { EventServiceRepository } from "../repositories";
import { EventServiceService } from "../services";

export class EventServiceRoutes {
  static get routes(): Router {
    const router = Router();

    const service = new EventServiceService();
    const repository = new EventServiceRepository(service);
    const controller = new EventServiceController(repository);

    router.get("/", controller.getAll);
    router.get("/:id", controller.getById);
    router.post("/", controller.create);
    router.put("/:id", controller.updateById);
    router.delete("/:id", controller.deleteById);

    return router;
  }
}
