import { CustomError } from "../errors";

export class EventFeatureEntity {
  constructor(
    public idEventFeature: string,
    public name: string,
    public description: string,
    public price: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt?: Date,
  ) {}

  static fromObject(obj: { [key: string]: any }) {
    const {
      idEventFeature,
      name,
      description,
      price,
      createdAt,
      updatedAt,
      deletedAt,
    } = obj;

    return new EventFeatureEntity(
      idEventFeature,
      name,
      description,
      price,
      createdAt,
      updatedAt,
      deletedAt,
    );
  }
}
