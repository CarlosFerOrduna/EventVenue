import { AvailabilityEntity, Dto } from '../domain'
import { Service } from './service'

export class AvailabilityService extends Service<AvailabilityEntity> {
  async create(entityDto: Dto): Promise<AvailabilityEntity> {
    throw new Error('Method not implemented.')
  }

  async getAll(): Promise<AvailabilityEntity[]> {
    throw new Error('Method not implemented.')
  }

  async getById(id: string): Promise<AvailabilityEntity> {
    throw new Error('Method not implemented.')
  }

  async updateById(dto: Dto): Promise<AvailabilityEntity> {
    throw new Error('Method not implemented.')
  }

  async deleteById(id: string): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}
