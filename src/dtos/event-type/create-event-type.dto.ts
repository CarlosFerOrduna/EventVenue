import { Dto } from "../../entities";

export class CreateEventTypeDto extends Dto {
  private constructor(public readonly name: string) {
    super();
  }

  static create(name: string): [string?, CreateEventTypeDto?] {
    if (name.trim().length < 1) return ["Name is not valid"];

    return [undefined, new CreateEventTypeDto(name)];
  }
}
