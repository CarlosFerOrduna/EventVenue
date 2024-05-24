import { Dto, EventTypeEntity, PaginationDto } from '../domain'
import { Repository } from './repository'

export class EventTypeRepository extends Repository<EventTypeEntity> {
  async create(entityDto: Dto): Promise<EventTypeEntity> {
    return this.service.create(entityDto)
  }

  async getAll(selectDto: Dto, paginationDto?: PaginationDto): Promise<EventTypeEntity[]> {
    return this.service.getAll(selectDto, paginationDto)
  }

  async getById(id: string): Promise<EventTypeEntity> {
    return this.service.getById(id)
  }

  async updateById(dto: Dto): Promise<EventTypeEntity> {
    return this.service.updateById(dto)
  }

  async deleteById(id: string): Promise<boolean> {
    return this.service.deleteById(id)
  }
}
