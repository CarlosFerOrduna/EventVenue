import { CustomError } from "../errors";

export class ReservationEventFeatureEntity {
  constructor(
    public idReservationEventFeature: string,
    public idReservation: string,
    public idEventFeature: string,
  ) {}

  static fromObject(obj: { [key: string]: any }) {
    const { idReservationEventFeature, idReservation, idEventFeature } = obj;

    return new ReservationEventFeatureEntity(
      idReservationEventFeature,
      idReservation,
      idEventFeature,
    );
  }
}
