import { Dto } from "../domain";
import { Service } from "../services";

export abstract class Repository {
  constructor(protected readonly service: Service) {}

  abstract create(entityDto: Dto): Promise<Dto>;

  abstract getAll(paginationDto: Dto): Promise<Dto[]>;

  abstract getById(id: string): Promise<Dto>;

  abstract updateById(dto: Dto): Promise<Dto>;

  abstract deleteById(id: string): Promise<boolean>;
}
