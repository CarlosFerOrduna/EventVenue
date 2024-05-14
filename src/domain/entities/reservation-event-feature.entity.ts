import { CustomError } from '../errors'
import { Entity } from './entity'

export class ReservationEventFeatureEntity extends Entity {
  constructor(public idReservationEventFeature: string, public idReservation: string, public idEventFeature: string) {
    super()
  }

  static fromObject(obj: { [key: string]: any }) {
    const { idReservationEventFeature, idReservation, idEventFeature } = obj

    if (!idReservationEventFeature) CustomError.badRequest('Missing idReservationEventFeature')
    if (!idReservation) CustomError.badRequest('Missing idReservation')
    if (!idEventFeature) CustomError.badRequest('Missing idEventFeature')

    return new ReservationEventFeatureEntity(idReservationEventFeature, idReservation, idEventFeature)
  }
}
