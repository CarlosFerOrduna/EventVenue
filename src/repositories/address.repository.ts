import { AddressEntity, Dto } from "../domain";
import { Repository } from "./repository";

export class AddressRepository extends Repository<AddressEntity> {
  async create(entityDto: Dto): Promise<AddressEntity> {
    return this.service.create(entityDto);
  }

  async getAll(): Promise<AddressEntity[]> {
    return this.service.getAll();
  }

  async getById(id: string): Promise<AddressEntity> {
    return this.service.getById(id);
  }

  async updateById(dto: Dto): Promise<AddressEntity> {
    return this.service.updateById(dto);
  }

  async deleteById(id: string): Promise<boolean> {
    return this.service.deleteById(id);
  }
}
