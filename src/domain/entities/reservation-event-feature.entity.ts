import { CustomError } from '../errors'
import { Entity } from './entity'

export interface ReservationEventFeature {
  idReservationEventFeature: string
  idReservation: string
  idEventFeature: string
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}

export class ReservationEventFeatureEntity extends Entity {
  constructor(
    public idReservationEventFeature: string,
    public idReservation: string,
    public idEventFeature: string,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt?: Date,
  ) {
    super()
  }

  static fromObject(obj: { [key: string]: any }) {
    const { idReservationEventFeature, idReservation, idEventFeature, createdAt, updatedAt, deletedAt } = obj

    if (!idReservationEventFeature) CustomError.badRequest('Missing idReservationEventFeature')
    if (!idReservation) CustomError.badRequest('Missing idReservation')
    if (!idEventFeature) CustomError.badRequest('Missing idEventFeature')

    return new ReservationEventFeatureEntity(
      idReservationEventFeature,
      idReservation,
      idEventFeature,
      createdAt,
      updatedAt,
      deletedAt,
    )
  }
}
