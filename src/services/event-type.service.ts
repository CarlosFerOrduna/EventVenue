import { Dto } from "../domain";
import { Service } from "./service.entity";

export class EventTypeService extends Service {
  async create(entityDto: Dto): Promise<Dto> {
    throw new Error("Method not implemented.");
  }

  async getAll(paginationDto: Dto): Promise<Dto[]> {
    throw new Error("Method not implemented.");
  }

  async getById(id: string): Promise<Dto> {
    throw new Error("Method not implemented.");
  }

  async updateById(dto: Dto): Promise<Dto> {
    throw new Error("Method not implemented.");
  }

  async deleteById(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
