import { Dto, PaginationDto, VenueEntity } from '../domain'
import { Repository } from './repository'

export class VenueRepository extends Repository<VenueEntity> {
  async create(entityDto: Dto): Promise<VenueEntity> {
    return this.service.create(entityDto)
  }

  async getAll(selectDto: Dto, paginationDto?: PaginationDto): Promise<VenueEntity[]> {
    return this.service.getAll(selectDto, paginationDto)
  }

  async getById(id: string): Promise<VenueEntity> {
    return this.service.getById(id)
  }

  async updateById(dto: Dto): Promise<VenueEntity> {
    return this.service.updateById(dto)
  }

  async deleteById(id: string): Promise<boolean> {
    return this.service.deleteById(id)
  }
}
