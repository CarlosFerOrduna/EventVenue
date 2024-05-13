import { Dto, EventFeatureEntity } from "../domain";
import { Repository } from "./repository";

export class EventFeatureRepository extends Repository<EventFeatureEntity> {
  async create(entityDto: Dto): Promise<EventFeatureEntity> {
    return this.service.create(entityDto);
  }

  async getAll(): Promise<EventFeatureEntity[]> {
    return this.service.getAll();
  }

  async getById(id: string): Promise<EventFeatureEntity> {
    return this.service.getById(id);
  }

  async updateById(dto: Dto): Promise<EventFeatureEntity> {
    return this.service.updateById(dto);
  }

  async deleteById(id: string): Promise<boolean> {
    return this.service.deleteById(id);
  }
}
