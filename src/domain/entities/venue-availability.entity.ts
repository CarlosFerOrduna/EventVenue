import { CustomError } from "../errors";

export class VenueAvailabilityEntity {
  constructor(
    public idVenueAvailability: string,
    public idVenue: string,
    public idAvailability: string,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt?: Date,
  ) {}

  static fromObject(obj: { [key: string]: any }) {
    const {
      idVenueAvailability,
      idVenue,
      idAvailability,
      createdAt,
      updatedAt,
      deletedAt,
    } = obj;

    return new VenueAvailabilityEntity(
      idVenueAvailability,
      idVenue,
      idAvailability,
      createdAt,
      updatedAt,
      deletedAt,
    );
  }
}