import { Dto } from "../domain";
import { Repository } from "./repository.entity";

export class EventServiceRepository extends Repository {
  async create(entityDto: Dto): Promise<Dto> {
    return await this.service.create(entityDto);
  }

  async getAll(paginationDto: Dto): Promise<Dto[]> {
    return await this.service.getAll(paginationDto);
  }

  async getById(id: string): Promise<Dto> {
    return await this.service.getById(id);
  }

  async updateById(dto: Dto): Promise<Dto> {
    return await this.service.updateById(dto);
  }

  async deleteById(id: string): Promise<boolean> {
    return await this.service.deleteById(id);
  }
}
