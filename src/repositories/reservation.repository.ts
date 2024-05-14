import { Dto, ReservationEntity } from '../domain'
import { Repository } from './repository'

export class ReservationRepository extends Repository<ReservationEntity> {
  async create(entityDto: Dto): Promise<ReservationEntity> {
    return this.service.create(entityDto)
  }

  async getAll(): Promise<ReservationEntity[]> {
    return this.service.getAll()
  }

  async getById(id: string): Promise<ReservationEntity> {
    return this.service.getById(id)
  }

  async updateById(dto: Dto): Promise<ReservationEntity> {
    return this.service.updateById(dto)
  }

  async deleteById(id: string): Promise<boolean> {
    return this.service.deleteById(id)
  }
}