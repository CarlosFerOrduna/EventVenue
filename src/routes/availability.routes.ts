import { Router } from "express";
import { AvailabilityController } from "../controllers";
import { AvailabilityRepository } from "../repositories";
import { AvailabilityService } from "../services";

export class AvailabilityRoutes {
  static get routes(): Router {
    const router = Router();

    const service = new AvailabilityService();
    const repository = new AvailabilityRepository(service);
    const controller = new AvailabilityController(repository);

    router.get("/", controller.getAll);
    router.get("/:id", controller.getById);
    router.post("/", controller.create);
    router.put("/:id", controller.updateById);
    router.delete("/:id", controller.deleteById);

    return router;
  }
}
