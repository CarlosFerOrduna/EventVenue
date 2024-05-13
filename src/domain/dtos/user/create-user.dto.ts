import { regularExps } from "../../../config";
import { Dto } from "../dto.entity";

enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

export class CreateUserDto extends Dto {
  private constructor(
    public readonly email: string,
    public readonly names?: string,
    public readonly surnames?: string,
    public readonly role?: Role,
  ) {
    super();
  }

  static create(props: { [key: string]: any }): [string?, CreateUserDto?] {
    const { email, names = null, surnames = null, role = null } = props;
    if (regularExps.email.test(email)) return ["Email is not valid"];
    if (!!names && names.trim().length < 1) return ["Names is not valid"];
    if (!!surnames && surnames.trim().length < 1)
      return ["Surnames is not valid"];
    if (!!role && role.trim().length < 1) return ["Role is not valid"];
    if (!!role && !Object.values(Role).includes(role))
      return ["Role is not valid"];

    return [undefined, new CreateUserDto(email, names, surnames, role)];
  }
}