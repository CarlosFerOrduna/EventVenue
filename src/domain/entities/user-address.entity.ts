import { CustomError } from "../errors";

export class UserAddressEntity {
  constructor(
    public idUserAddress: string,
    public idUser: string,
    public idAddress: string,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt?: Date,
  ) {}

  static fromObject(obj: { [key: string]: any }) {
    const {
      idUserAddress,
      idUser,
      idAddress,
      createdAt,
      updatedAt,
      deletedAt,
    } = obj;

    return new UserAddressEntity(
      idUserAddress,
      idUser,
      idAddress,
      createdAt,
      updatedAt,
      deletedAt,
    );
  }
}
