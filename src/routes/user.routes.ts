import { Router } from "express";
import { UserController } from "../controllers";
import { UserRepository } from "../repositories";
import { UserService } from "../services";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();

    const service = new UserService();
    const repository = new UserRepository(service);
    const controller = new UserController(repository);

    router.get("/", controller.getAll);
    router.get("/:id", controller.getById);
    router.post("/", controller.create);
    router.put("/:id", controller.updateById);
    router.delete("/:id", controller.deleteById);

    return router;
  }
}
