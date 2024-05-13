import { Router } from "express";
import { ReservationController } from "../controllers";
import { ReservationRepository } from "../repositories";
import { ReservationService } from "../services";

export class ReservationRoutes {
  static get routes(): Router {
    const router = Router();

    const service = new ReservationService();
    const repository = new ReservationRepository(service);
    const controller = new ReservationController(repository);

    router.get("/", controller.getAll);
    router.get("/:id", controller.getById);
    router.post("/", controller.create);
    router.put("/:id", controller.updateById);
    router.delete("/:id", controller.deleteById);

    return router;
  }
}
