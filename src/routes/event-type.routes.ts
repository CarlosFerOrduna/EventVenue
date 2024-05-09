import { Router } from "express";
import { EventTypeController } from "../controllers";
import { EventTypeRepository } from "../repositories";
import { EventTypeService } from "../services";

export class EventTypeRoutes {
  static get routes(): Router {
    const router = Router();

    const service = new EventTypeService();
    const repository = new EventTypeRepository(service);
    const controller = new EventTypeController(repository);

    router.get("/", controller.getAll);
    router.get("/:id", controller.getById);
    router.post("/", controller.create);
    router.put("/:id", controller.updateById);
    router.delete("/:id", controller.deleteById);

    return router;
  }
}
