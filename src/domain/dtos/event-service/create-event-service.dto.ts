import { Dto } from "../dto.entity";

export class CreateEventServiceDto extends Dto {
  private constructor(
    public readonly name: string,
    public readonly price: number,
  ) {
    super();
  }

  static create(props: {
    [key: string]: any;
  }): [string?, CreateEventServiceDto?] {
    const { name, price } = props;
    if (name.trim().length < 1) return ["Name is not valid"];
    if (isNaN(price)) return ["Price must be number"];
    if (price <= 0) return ["Price must be greater than 0"];

    return [undefined, new CreateEventServiceDto(name, price)];
  }
}
