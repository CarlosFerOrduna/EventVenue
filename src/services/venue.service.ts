import { Dto, VenueEntity } from "../domain";
import { Service } from "./service";

export class VenueService extends Service<VenueEntity> {
  async create(entityDto: Dto): Promise<VenueEntity> {
    throw new Error("Method not implemented.");
  }

  async getAll(): Promise<VenueEntity[]> {
    throw new Error("Method not implemented.");
  }

  async getById(id: string): Promise<VenueEntity> {
    throw new Error("Method not implemented.");
  }

  async updateById(dto: Dto): Promise<VenueEntity> {
    throw new Error("Method not implemented.");
  }

  async deleteById(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
