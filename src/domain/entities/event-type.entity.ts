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
