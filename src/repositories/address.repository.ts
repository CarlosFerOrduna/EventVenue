import { AddressEntity, CreateAddressDto, UpdateAddressDto } from '../domain'
import { Repository } from './repository'

export class AddressRepository extends Repository<AddressEntity> {
  async create(entityDto: CreateAddressDto): Promise<AddressEntity> {
    return await this.service.create(entityDto)
  }

  async getAll(): Promise<AddressEntity[]> {
    return this.service.getAll()
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
