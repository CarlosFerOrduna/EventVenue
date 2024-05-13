import { CustomError } from "../errors";
import { Entity } from "./entity";

export class AddressEntity extends Entity {
  constructor(
    public idAddress: string,
    public createdAt: Date,
    public updatedAt: Date,
    public streetName?: string,
    public streetNumber?: number,
    public zipCode?: string,
    public neighborhood?: string,
    public floor?: string,
    public apartment?: string,
    public city?: string,
    public state?: string,
    public country?: string,
    public deletedAt?: Date,
  ) {
    super();
  }

  static fromObject(obj: { [key: string]: any }) {
    const {
      idAddress,
      createdAt,
      updatedAt,
      streetName,
      streetNumber,
      zipCode,
      neighborhood,
      floor,
      apartment,
      city,
      state,
      country,
      deletedAt,
    } = obj;

    if (!idAddress) CustomError.badRequest("Missing idAddress");
    if (!!streetName && !isNaN(streetName))
      CustomError.badRequest("streetName must be a string");
    if (!!streetNumber && isNaN(streetNumber))
      CustomError.badRequest("streetNumber must be a number");
    if (!!zipCode && isNaN(zipCode))
      CustomError.badRequest("zipCode must be a number");
    if (!!neighborhood && !isNaN(neighborhood))
      CustomError.badRequest("neighborhood must be a string");
    if (!!floor && isNaN(floor))
      CustomError.badRequest("floor must be a number");
    if (!!apartment && !isNaN(apartment))
      CustomError.badRequest("apartment must be a string");
    if (!!city && !isNaN(city)) CustomError.badRequest("city must be a string");
    if (!!state && !isNaN(state))
      CustomError.badRequest("state must be a string");
    if (!!country && !isNaN(country))
      CustomError.badRequest("country must be a string");

    return new AddressEntity(
      idAddress,
      createdAt,
      updatedAt,
      streetName,
      streetNumber,
      zipCode,
      neighborhood,
      floor,
      apartment,
      city,
      state,
      country,
      deletedAt,
    );
  }
}
