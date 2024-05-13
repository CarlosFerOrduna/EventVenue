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

    if (!idUser) CustomError.badRequest("Missing idUser");
    if (!email) CustomError.badRequest("Missing email");
    if (!role) CustomError.badRequest("Missing role");
    if (!password) CustomError.badRequest("Missing password");
    if (!names) CustomError.badRequest("Missing names");
    if (!!names && !isNaN(names))
      CustomError.badRequest("names must be a string");
    if (!surnames) CustomError.badRequest("Missing surnames");
    if (!!surnames && !isNaN(surnames))
      CustomError.badRequest("surnames must be a string");

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
