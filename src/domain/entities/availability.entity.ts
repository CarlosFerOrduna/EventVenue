import { CustomError } from "../errors";

export class AvailabilityEntity {
  constructor(
    public idAvailability: string,
    public dateOfWeek: number,
    public startTime: Date,
    public endTime: Date,
    public createdAt: Date,
    public updatedAt: Date,
    public description?: string,
    public deletedAt?: Date,
  ) {}

  static fromObject(obj: { [key: string]: any }) {
    const {
      idAvailability,
      dateOfWeek,
      startTime,
      endTime,
      createdAt,
      updatedAt,
      description,
      deletedAt,
    } = obj;

    if (!idAvailability) CustomError.badRequest("Missing idAvailability");
    if (!dateOfWeek) CustomError.badRequest("Missing dateOfWeek");
    if (!startTime) CustomError.badRequest("Missing startTime");
    if (!endTime) CustomError.badRequest("Missing endTime");
    if (!!description && !isNaN(description))
      CustomError.badRequest("description must be a string");

    return new AvailabilityEntity(
      idAvailability,
      dateOfWeek,
      startTime,
      endTime,
      createdAt,
      updatedAt,
      description,
      deletedAt,
    );
  }
}
