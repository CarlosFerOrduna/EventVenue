import { Dto, PaginationDto, UserEntity } from '../domain'
import { Repository } from './repository'

export class UserRepository extends Repository<UserEntity> {
  async create(entityDto: Dto): Promise<UserEntity> {
    return this.service.create(entityDto)
  }

  async getAll(selectDto: Dto, paginationDto?: PaginationDto): Promise<UserEntity[]> {
    return this.service.getAll(selectDto, paginationDto)
  }

  async getById(id: string): Promise<UserEntity> {
    return this.service.getById(id)
  }

  async updateById(dto: Dto): Promise<UserEntity> {
    return this.service.updateById(dto)
  }

  async deleteById(id: string): Promise<boolean> {
    return this.service.deleteById(id)
  }
}
