import { Dto } from "../../entities";

export class CreateEventServiceDto extends Dto {
  private constructor(
    public readonly name: string,
    public readonly price: number,
  ) {
    super();
  }

  static create(
    name: string,
    price: number,
  ): [string?, CreateEventServiceDto?] {
    if (name.trim().length < 1) return ["Name is not valid"];
    if (isNaN(price)) return ["Price must be number"];
    if (price <= 0) return ["Price must be greater than 0"];

    return [undefined, new CreateEventServiceDto(name, price)];
  }
}
