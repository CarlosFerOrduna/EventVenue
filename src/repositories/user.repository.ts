import { Dto } from "../domain";
import { Repository } from "./repository.entity";

export class UserRepository extends Repository {
  async create(entityDto: Dto): Promise<Dto> {
    throw new Error("Method not implemented.");
  }

  async getAll(paginationDto: Dto): Promise<Dto[]> {
    throw new Error("Method not implemented.");
  }

  async getById(dto: Dto): Promise<Dto> {
    throw new Error("Method not implemented.");
  }

  async updateById(dto: Dto): Promise<Dto> {
    throw new Error("Method not implemented.");
  }

  async deleteById(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
