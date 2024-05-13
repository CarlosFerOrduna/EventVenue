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
