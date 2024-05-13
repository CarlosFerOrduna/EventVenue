import { Request, Response } from "express";
import { CreateEventTypeDto, EventTypeEntity } from "../domain";
import { Controller } from "./controller";

export class EventTypeController extends Controller<EventTypeEntity> {
  async create(req: Request, res: Response) {
    try {
      const [error, createEventServiceDto] = CreateEventTypeDto.create(
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
      const result = await this.repository.getAll();

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
        return res.status(404).json({ message: "EventType not found" });
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
