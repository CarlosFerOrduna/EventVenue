import { PrismaClient } from "@prisma/client";
import { Dto, Entity } from "../domain";

export abstract class Service<T extends Entity> {
  protected prismaClient = new PrismaClient();

  abstract create(entityDto: Dto): Promise<T>;

  abstract getAll(): Promise<T[]>;

  abstract getById(id: string): Promise<T>;

  abstract updateById(dto: Dto): Promise<T>;

  abstract deleteById(id: string): Promise<boolean>;
}