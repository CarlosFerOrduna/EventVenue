import { Role } from "@prisma/client";
import { regularExps } from "../../../config";
import { Dto } from "../dto";

export class CreateUserDto extends Dto {
  private constructor(
    public email: string,
    public names?: string,
    public surnames?: string,
    public role?: Role,
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
