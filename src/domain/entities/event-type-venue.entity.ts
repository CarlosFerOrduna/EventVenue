import { CustomError } from "../errors";
import { Entity } from "./entity";

export class EventTypeVenueEntity extends Entity {
  constructor(
    public idEventTypeOnVenue: string,
    public idVenue: string,
    public idEventType: string,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt?: Date,
  ) {
    super();
  }

  static fromObject(obj: { [key: string]: any }) {
    const {
      idEventTypeOnVenue,
      idVenue,
      idEventType,
      createdAt,
      updatedAt,
      deletedAt,
    } = obj;

    if (!idEventTypeOnVenue)
      CustomError.badRequest("Missing idEventTypeOnVenue");
    if (!idVenue) CustomError.badRequest("Missing idVenue");
    if (!idEventType) CustomError.badRequest("Missing idEventType");

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
