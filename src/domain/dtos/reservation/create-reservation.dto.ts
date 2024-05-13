import { Dto } from "../dto";

export class CreateReservationDto extends Dto {
  private constructor(
    public idVenue: string,
    public idEventType: string,
    public date: Date,
    public description?: string,
    public start?: Date,
    public end?: Date,
  ) {
    super();
  }

  static create(props: {
    [key: string]: any;
  }): [string?, CreateReservationDto?] {
    const { idVenue, idEventType, date, description, start, end } = props;

    if (!!description && description.trim().length < 1)
      return ["description is not valid"];

    return [
      undefined,
      new CreateReservationDto(
        idVenue,
        idEventType,
        date,
        description,
        start,
        end,
      ),
    ];
  }
}
