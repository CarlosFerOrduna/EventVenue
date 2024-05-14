import { AddressEntity, CreateAddressDto, Dto, PaginationDto, UpdateAddressDto } from '../domain'
import { Repository } from './repository'

export class AddressRepository extends Repository<AddressEntity> {
  async create(entityDto: CreateAddressDto): Promise<AddressEntity> {
    return await this.service.create(entityDto)
  }

  async getAll(selectDto: Dto, paginationDto?: PaginationDto): Promise<AddressEntity[]> {
    return this.service.getAll(selectDto, paginationDto)
  }

  async getById(id: string): Promise<AddressEntity> {
    return this.service.getById(id)
  }

  async updateById(dto: UpdateAddressDto): Promise<AddressEntity> {
    return this.service.updateById(dto)
  }

  async deleteById(id: string): Promise<boolean> {
    return this.service.deleteById(id)
  }
}
