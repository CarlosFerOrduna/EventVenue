import { Dto } from "./dto.entity";
import { Service } from "./service.entity";

export abstract class Repository {
  constructor(protected readonly service: Service) {}

  abstract create(entityDto: Dto): Dto;

  abstract getAll(paginationDto: Dto): Dto[];

  abstract getById(dto: Dto): Dto;

  abstract updateById(id: number): Dto;

  abstract deleteById(id: number): boolean;
}
