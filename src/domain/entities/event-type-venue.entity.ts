import { CustomError } from "../errors";

export class EventTypeVenueEntity {
  constructor(
    public idEventTypeOnVenue: string,
    public idVenue: string,
    public idEventType: string,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt?: Date,
  ) {}

  static fromObject(obj: { [key: string]: any }) {
    const {
      idEventTypeOnVenue,
      idVenue,
      idEventType,
      createdAt,
      updatedAt,
      deletedAt,
    } = obj;

    return new EventTypeVenueEntity(
      idEventTypeOnVenue,
      idVenue,
      idEventType,
      createdAt,
      updatedAt,
      deletedAt,
    );
  }
}
