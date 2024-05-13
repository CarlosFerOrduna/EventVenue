import { CustomError } from "../errors";

export class EventTypeEventFeatureEntity {
  constructor(
    public idEventTypeEventFeature: string,
    public idEventType: string,
    public idEventFeature: string,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt?: Date,
  ) {}

  static fromObject(obj: { [key: string]: any }) {
    const {
      idEventTypeEventFeature,
      idEventType,
      idEventFeature,
      createdAt,
      updatedAt,
      deletedAt,
    } = obj;

    return new EventTypeEventFeatureEntity(
      idEventTypeEventFeature,
      idEventType,
      idEventFeature,
      createdAt,
      updatedAt,
      deletedAt,
    );
  }
}
