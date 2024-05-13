import { Router } from "express";
import { EventFeatureController } from "../controllers";
import { EventFeatureRepository } from "../repositories";
import { EventFeatureService } from "../services";

export class EventFeatureRoutes {
  static get routes(): Router {
    const router = Router();

    const service = new EventFeatureService();
    const repository = new EventFeatureRepository(service);
    const controller = new EventFeatureController(repository);

    router.get("/", controller.getAll);
    router.get("/:id", controller.getById);
    router.post("/", controller.create);
    router.put("/:id", controller.updateById);
    router.delete("/:id", controller.deleteById);

    return router;
  }
}
