import { Dto } from "../dto";

export class CreateVenueDto extends Dto {
  private constructor(
    public name: string,
    public description?: string,
    public capacity?: number,
  ) {
    super();
  }

  static create(props: { [key: string]: any }): [string?, CreateVenueDto?] {
    const { name, description, capacity } = props;

    if (!!name && name.trim().length < 1) return ["name is not valid"];
    if (!!description && description.trim().length < 1)
      return ["description is not valid"];
    if (!!capacity && capacity.trim().length < 1)
      return ["capacity is not valid"];

    return [undefined, new CreateVenueDto(name, description, capacity)];
  }
}
