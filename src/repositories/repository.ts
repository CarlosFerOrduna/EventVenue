import { Dto, Entity } from "../domain";
import { Service } from "../services";

export abstract class Repository<T extends Entity> {
  constructor(protected readonly service: Service<T>) {}

  abstract create(entityDto: Dto): Promise<Entity>;

  abstract getAll(): Promise<Entity[]>;

  abstract getById(id: string): Promise<Entity>;

  abstract updateById(dto: Dto): Promise<Entity>;

  abstract deleteById(id: string): Promise<boolean>;
}
