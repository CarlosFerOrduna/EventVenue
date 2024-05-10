import { Dto } from "../dto.entity";

export class CreateHallDto extends Dto {
  private constructor(
    public readonly name: string,
    public readonly maxQuantity?: number,
  ) {
    super();
  }

  static create(props: { [key: string]: any }): [string?, CreateHallDto?] {
    const { name, maxQuantity = null } = props;
    if (name.trim().length < 1) return ["Name is not valid"];
    if (!!maxQuantity && isNaN(maxQuantity))
      return ["Max quantity must be a number"];
    if (!!maxQuantity && maxQuantity < 0)
      return ["Max quantity must be greater than 0"];

    return [undefined, new CreateHallDto(name, maxQuantity)];
  }
}
