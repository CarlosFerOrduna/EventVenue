import { PrismaClient } from "@prisma/client";
import { Dto } from "../domain";

export abstract class Service {
  protected prismaClient = new PrismaClient();

  abstract create(entityDto: Dto): Promise<Dto>;

  abstract getAll(paginationDto: Dto): Promise<Dto[]>;

  abstract getById(id: string): Promise<Dto>;

  abstract updateById(dto: Dto): Promise<Dto>;

  abstract deleteById(id: string): Promise<boolean>;
}
