import { Dto, EventTypeEntity } from '../domain'
import { Service } from './service'

export class EventTypeService extends Service<EventTypeEntity> {
  async create(entityDto: Dto): Promise<EventTypeEntity> {
    throw new Error('Method not implemented.')
  }

  async getAll(): Promise<EventTypeEntity[]> {
    throw new Error('Method not implemented.')
  }

  async getById(id: string): Promise<EventTypeEntity> {
    throw new Error('Method not implemented.')
  }

  async updateById(dto: Dto): Promise<EventTypeEntity> {
    throw new Error('Method not implemented.')
  }

  async deleteById(id: string): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}
