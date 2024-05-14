import { Dto, EventTypeEntity } from '../domain'
import { Repository } from './repository'

export class EventTypeRepository extends Repository<EventTypeEntity> {
  async create(entityDto: Dto): Promise<EventTypeEntity> {
    return this.service.create(entityDto)
  }

  async getAll(): Promise<EventTypeEntity[]> {
    return this.service.getAll()
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
