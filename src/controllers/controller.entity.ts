import { Request, Response } from "express";
import { CustomError } from "../domain";
import { Repository } from "../repositories";

export abstract class Controller {
  constructor(protected readonly repository: Repository) {}

  protected handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    return res.status(500).json({ error: "Internal Server Error" });
  };

  abstract create(req: Request, res: Response): void;

  abstract getAll(req: Request, res: Response): void;

  abstract getById(req: Request, res: Response): void;

  abstract updateById(req: Request, res: Response): void;

  abstract deleteById(req: Request, res: Response): void;
}
