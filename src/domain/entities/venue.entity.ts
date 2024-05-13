import { CustomError } from "../errors";

export class VenueEntity {
  constructor(
    public idVenue: string,
    public name: string,
    public createdAt: Date,
    public updatedAt: Date,
    public description?: string,
    public capacity?: number,
    public deletedAt?: Date,
  ) {}

  static fromObject(obj: { [key: string]: any }) {
    const {
      idVenue,
      name,
      createdAt,
      updatedAt,
      description,
      capacity,
      deletedAt,
    } = obj;

    if (!name) CustomError.badRequest("Missing name");
    if (!description) CustomError.badRequest("Missing description");
    if (!isNaN(description)) CustomError.badRequest("Description is not valid");
    if (!capacity) CustomError.badRequest("Missing capacity");
    if (!isNaN(capacity)) CustomError.badRequest("Capacity is not valid");

    return new VenueEntity(
      idVenue,
      name,
      createdAt,
      updatedAt,
      description,
      capacity,
      deletedAt,
    );
  }
}
