import { Router } from "express";
import { AddressController } from "../controllers";
import { AddressRepository } from "../repositories";
import { AddressService } from "../services";

export class AddressRoutes {
  static get routes(): Router {
    const router = Router();

    const service = new AddressService();
    const repository = new AddressRepository(service);
    const controller = new AddressController(repository);
    console.log({ service });
    console.log({ repository });
    console.log({ controller });
    router.get("/", controller.getAll);
    router.get("/:id", controller.getById);
    router.post("/", controller.create);
    router.put("/:id", controller.updateById);
    router.delete("/:id", controller.deleteById);

    return router;
  }
}
