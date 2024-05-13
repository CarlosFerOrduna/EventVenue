import { CustomError } from "../errors";

export class EventTypeEntity {
  constructor(
    public idEventType: string,
    public name: string,
    public createdAt: Date,
    public updatedAt: Date,
    public description?: string,
    public deletedAt?: Date,
  ) {}

  static fromObject(obj: { [key: string]: any }) {
    const { idEventType, name, createdAt, updatedAt, description, deletedAt } =
      obj;

    if (!idEventType) CustomError.badRequest("Missing idEventType");
    if (!name) CustomError.badRequest("Missing name");
    if (!!name && !isNaN(name)) CustomError.badRequest("name must be a string");
    if (!!description && !isNaN(description))
      CustomError.badRequest("description must be a string");

    return new EventTypeEntity(
      idEventType,
      name,
      createdAt,
      updatedAt,
      description,
      deletedAt,
    );
  }
}
