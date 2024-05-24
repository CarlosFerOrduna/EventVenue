import { AvailabilityEntity, Dto, PaginationDto } from '../domain'
import { Repository } from './repository'

export class AvailabilityRepository extends Repository<AvailabilityEntity> {
  async create(entityDto: Dto): Promise<AvailabilityEntity> {
    return this.service.create(entityDto)
  }

  async getAll(selectDto: Dto, paginationDto?: PaginationDto): Promise<AvailabilityEntity[]> {
    return this.service.getAll(selectDto, paginationDto)
  }

  async getById(id: string): Promise<AvailabilityEntity> {
    return this.service.getById(id)
  }

  async updateById(dto: Dto): Promise<AvailabilityEntity> {
    return this.service.updateById(dto)
  }

  async deleteById(id: string): Promise<boolean> {
    return this.service.deleteById(id)
  }
}
