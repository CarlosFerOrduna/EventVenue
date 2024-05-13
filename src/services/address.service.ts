import { AddressEntity, Dto } from "../domain";
import { Service } from "./service";

export class AddressService extends Service<AddressEntity> {
  async create(entityDto: Dto): Promise<AddressEntity> {
    throw new Error("Method not implemented.");
  }

  async getAll(): Promise<AddressEntity[]> {
    throw new Error("Method not implemented.");
  }

  async getById(id: string): Promise<AddressEntity> {
    throw new Error("Method not implemented.");
  }

  async updateById(dto: Dto): Promise<AddressEntity> {
    throw new Error("Method not implemented.");
  }

  async deleteById(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
