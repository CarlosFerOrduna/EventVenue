import { CustomError } from "../errors";

export class ReservationEventFeatureEntity {
  constructor(
    public idReservationEventFeature: string,
    public idReservation: string,
    public idEventFeature: string,
  ) {}

  static fromObject(obj: { [key: string]: any }) {
    const { idReservationEventFeature, idReservation, idEventFeature } = obj;

    if (!idReservationEventFeature)
      CustomError.badRequest("Missing idReservationEventFeature");
    if (!idReservation) CustomError.badRequest("Missing idReservation");
    if (!idEventFeature) CustomError.badRequest("Missing idEventFeature");

    return new ReservationEventFeatureEntity(
      idReservationEventFeature,
      idReservation,
      idEventFeature,
    );
  }
}
