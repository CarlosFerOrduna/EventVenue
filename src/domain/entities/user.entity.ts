import { Role } from "@prisma/client";
import { CustomError } from "../errors";

export class UserEntity {
  constructor(
    public idUser: string,
    public email: string,
    public role: Role,
    public password: string,
    public createdAt: Date,
    public updatedAt: Date,
    public names?: string,
    public surnames?: string,
    public deletedAt?: Date,
  ) {}

  static fromObject(obj: { [key: string]: any }) {
    const {
      idUser,
      email,
      role,
      password,
      createdAt,
      updatedAt,
      names,
      surnames,
      deletedAt,
    } = obj;

    return new UserEntity(
      idUser,
      email,
      role,
      password,
      createdAt,
      updatedAt,
      names,
      surnames,
      deletedAt,
    );
  }
}
