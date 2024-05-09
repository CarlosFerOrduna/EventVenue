import { Router } from "express";
import { HallController } from "../controllers";
import { HallRepository } from "../repositories";
import { HallService } from "../services";

export class HallRoutes {
  static get routes(): Router {
    const router = Router();

    const service = new HallService();
    const repository = new HallRepository(service);
    const controller = new HallController(repository);

    router.get("/", controller.getAll);
    router.get("/:id", controller.getById);
    router.post("/", controller.create);
    router.put("/:id", controller.updateById);
    router.delete("/:id", controller.deleteById);

    return router;
  }
}
