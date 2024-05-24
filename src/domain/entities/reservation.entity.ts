import { CustomError } from '../errors'
import { Entity } from './entity'

export interface Reservation {
  idReservation: string
  idVenue: string
  idEventType: string
  date: Date
  createdAt: Date
  updatedAt: Date
  description?: string
  start?: Date
  end?: Date
  deletedAt?: Date
}

export class ReservationEntity extends Entity {
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
  ) {
    super()
  }

  static fromObject(obj: { [key: string]: any }) {
    const { idReservation, idVenue, idEventType, date, createdAt, updatedAt, description, start, end, deletedAt } = obj

    if (!idReservation) CustomError.badRequest('Missing idReservation')
    if (!idVenue) CustomError.badRequest('Missing idVenue')
    if (!idEventType) CustomError.badRequest('Missing idEventType')
    if (!!date && !isNaN(date)) CustomError.badRequest('date must be a date')
    if (!!description && !isNaN(description)) CustomError.badRequest('description must be a string')

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
    )
  }
}
