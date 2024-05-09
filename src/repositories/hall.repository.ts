import { Dto, Repository } from "../entities";

export class HallRepository extends Repository {
  create(entityDto: Dto): Dto {
    throw new Error("Method not implemented.");
  }

  getAll(paginationDto: Dto): Dto[] {
    throw new Error("Method not implemented.");
  }

  getById(dto: Dto): Dto {
    throw new Error("Method not implemented.");
  }

  updateById(dto: Dto): Dto {
    throw new Error("Method not implemented.");
  }

  deleteById(id: number): boolean {
    throw new Error("Method not implemented.");
  }
}
