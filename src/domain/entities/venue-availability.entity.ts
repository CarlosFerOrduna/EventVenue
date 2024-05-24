import { CustomError } from '../errors'
import { Entity } from './entity'

export interface VenueAvailability {
  idVenueAvailability: string
  idVenue: string
  idAvailability: string
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}

export class VenueAvailabilityEntity extends Entity {
  constructor(
    public idVenueAvailability: string,
    public idVenue: string,
    public idAvailability: string,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt?: Date,
  ) {
    super()
  }

  static fromObject(obj: { [key: string]: any }) {
    const { idVenueAvailability, idVenue, idAvailability, createdAt, updatedAt, deletedAt } = obj

    if (!idVenueAvailability) CustomError.badRequest('Missing idVenueAvailability')
    if (!idVenue) CustomError.badRequest('Missing idVenue')
    if (!idAvailability) CustomError.badRequest('Missing idAvailability')

    return new VenueAvailabilityEntity(idVenueAvailability, idVenue, idAvailability, createdAt, updatedAt, deletedAt)
  }
}
