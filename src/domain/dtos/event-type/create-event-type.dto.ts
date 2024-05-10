import { Dto } from "../dto.entity";

export class CreateEventTypeDto extends Dto {
  private constructor(public readonly name: string) {
    super();
  }

  static create(props: { [key: string]: any }): [string?, CreateEventTypeDto?] {
    const { name } = props;
    if (name.trim().length < 1) return ["Name is not valid"];

    return [undefined, new CreateEventTypeDto(name)];
  }
}
