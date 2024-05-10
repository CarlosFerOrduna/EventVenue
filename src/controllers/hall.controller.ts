import { Request, Response } from "express";
import { Controller } from "./controller.entity";

export class HallController extends Controller {
  async create(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }

  async getAll(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }

  async getById(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }

  async updateById(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }

  async deleteById(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }
}
