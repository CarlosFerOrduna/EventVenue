import { Dto, UserEntity } from "../domain";
import { Service } from "./service";

export class UserService extends Service<UserEntity> {
  async create(entityDto: Dto): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }

  async getAll(): Promise<UserEntity[]> {
    throw new Error("Method not implemented.");
  }

  async getById(id: string): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }

  async updateById(dto: Dto): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }

  async deleteById(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
