import { Dto, EventFeatureEntity } from "../domain";
import { Service } from "./service";

export class EventFeatureService extends Service<EventFeatureEntity> {
  async create(entityDto: Dto): Promise<EventFeatureEntity> {
    throw new Error("Method not implemented.");
  }

  async getAll(): Promise<EventFeatureEntity[]> {
    throw new Error("Method not implemented.");
  }

  async getById(id: string): Promise<EventFeatureEntity> {
    throw new Error("Method not implemented.");
  }

  async updateById(dto: Dto): Promise<EventFeatureEntity> {
    throw new Error("Method not implemented.");
  }

  async deleteById(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
