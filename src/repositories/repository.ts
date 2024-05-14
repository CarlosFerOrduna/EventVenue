import { Dto, Entity, PaginationDto } from '../domain'
import { Service } from '../services'

export abstract class Repository<T extends Entity> {
  constructor(protected readonly service: Service<T>) {}

  abstract create(createDto: Dto): Promise<Entity>

  abstract getAll(selectDto?: Dto, paginationDto?: PaginationDto): Promise<Entity[]>

  abstract getById(id: string): Promise<Entity>

  abstract updateById(updateDto: Dto): Promise<Entity>

  abstract deleteById(id: string): Promise<boolean>
}
