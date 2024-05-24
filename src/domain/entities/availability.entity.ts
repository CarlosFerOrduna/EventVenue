import { CustomError } from '../errors'
import { Entity } from './entity'

export interface Availability {
  idAvailability: string
  dateOfWeek: number
  startTime: Date
  endTime: Date
  createdAt: Date
  updatedAt: Date
  description?: string
  deletedAt?: Date
}

export class AvailabilityEntity extends Entity {
  constructor(
    public idAvailability: string,
    public dateOfWeek: number,
    public startTime: Date,
    public endTime: Date,
    public createdAt: Date,
    public updatedAt: Date,
    public description?: string,
    public deletedAt?: Date,
  ) {
    super()
  }

  static fromObject(obj: { [key: string]: any }) {
    const { idAvailability, dateOfWeek, startTime, endTime, createdAt, updatedAt, description, deletedAt } = obj

    if (!idAvailability) CustomError.badRequest('Missing idAvailability')
    if (!dateOfWeek) CustomError.badRequest('Missing dateOfWeek')
    if (!startTime) CustomError.badRequest('Missing startTime')
    if (!endTime) CustomError.badRequest('Missing endTime')
    if (!!description && !isNaN(description)) CustomError.badRequest('description must be a string')

    return new AvailabilityEntity(
      idAvailability,
      dateOfWeek,
      startTime,
      endTime,
      createdAt,
      updatedAt,
      description,
      deletedAt,
    )
  }
}
