import { CustomError } from "../errors";

export class ReservationEntity {
  constructor(
    public idReservation: string,
    public idVenue: string,
    public idEventType: string,
    public date: Date,
    public createdAt: Date,
    public updatedAt: Date,
    public description?: string,
    public start?: Date,
    public end?: Date,
    public deletedAt?: Date,
  ) {}

  static fromObject(obj: { [key: string]: any }) {
    const {
      idReservation,
      idVenue,
      idEventType,
      date,
      createdAt,
      updatedAt,
      description,
      start,
      end,
      deletedAt,
    } = obj;

    return new ReservationEntity(
      idReservation,
      idVenue,
      idEventType,
      date,
      createdAt,
      updatedAt,
      description,
      start,
      end,
      deletedAt,
    );
  }
}
