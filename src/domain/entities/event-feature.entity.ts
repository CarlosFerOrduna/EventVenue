import { CustomError } from "../errors";
import { Entity } from "./entity";

export class EventFeatureEntity extends Entity {
  constructor(
    public idEventFeature: string,
    public name: string,
    public description: string,
    public price: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt?: Date,
  ) {
    super();
  }

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

    if (!idEventFeature) CustomError.badRequest("Missing idEventFeature");
    if (!name) CustomError.badRequest("Missing name");
    if (!isNaN(name)) CustomError.badRequest("name must be a string");
    if (!description) CustomError.badRequest("Missing description");
    if (!isNaN(description))
      CustomError.badRequest("description must be a string");
    if (!price) CustomError.badRequest("Missing price");
    if (isNaN(price)) CustomError.badRequest("price must be a number");

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
