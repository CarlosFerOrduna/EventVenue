import { Dto, ReservationEntity } from "../domain";
import { Service } from "./service";

export class ReservationService extends Service<ReservationEntity> {
  async create(entityDto: Dto): Promise<ReservationEntity> {
    throw new Error("Method not implemented.");
  }

  async getAll(): Promise<ReservationEntity[]> {
    throw new Error("Method not implemented.");
  }

  async getById(id: string): Promise<ReservationEntity> {
    throw new Error("Method not implemented.");
  }

  async updateById(dto: Dto): Promise<ReservationEntity> {
    throw new Error("Method not implemented.");
  }

  async deleteById(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
