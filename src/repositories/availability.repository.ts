import { AvailabilityEntity, Dto } from "../domain";
import { Repository } from "./repository";

export class AvailabilityRepository extends Repository<AvailabilityEntity> {
  async create(entityDto: Dto): Promise<AvailabilityEntity> {
    return this.service.create(entityDto);
  }

  async getAll(): Promise<AvailabilityEntity[]> {
    return this.service.getAll();
  }

  async getById(id: string): Promise<AvailabilityEntity> {
    return this.service.getById(id);
  }

  async updateById(dto: Dto): Promise<AvailabilityEntity> {
    return this.service.updateById(dto);
  }

  async deleteById(id: string): Promise<boolean> {
    return this.service.deleteById(id);
  }
}
