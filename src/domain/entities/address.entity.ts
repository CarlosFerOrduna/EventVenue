import { CustomError } from "../errors";

export class AddressEntity {
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
  ) {}

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
