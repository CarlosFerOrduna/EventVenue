import { Request, Response } from "express";
import { CreateEventServiceDto, PaginationDto } from "../domain";
import { Controller } from "./controller.entity";

export class EventServiceController extends Controller {
  async create(req: Request, res: Response) {
    try {
      const [error, createEventServiceDto] = CreateEventServiceDto.create(
        req.body,
      );
      if (error) return res.status(400).json({ error });

      const result = await this.repository.create(createEventServiceDto!);

      res.status(201).json(result);
    } catch (error) {
      this.handleError(error, res);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const [error, paginationDto] = PaginationDto.create(+page, +limit);
      if (error) return res.status(400).json({ error });

      const result = await this.repository.getAll(paginationDto!);

      res.json(result);
    } catch (error) {
      this.handleError(error, res);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await this.repository.getById(id);
      if (!result) {
        return res.status(404).json({ message: "event service not found" });
      }

      res.json(result);
    } catch (error) {
      this.handleError(error, res);
    }
  }

  async updateById(req: Request, res: Response) {
    try {
    } catch (error) {
      this.handleError(error, res);
    }
  }

  async deleteById(req: Request, res: Response) {
    try {
    } catch (error) {
      this.handleError(error, res);
    }
  }
}
