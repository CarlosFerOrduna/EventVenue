import { userSchema } from '../../../config'
import { User } from '../../interfaces'
import { Dto } from '../dto'

export class SelectUserDto extends Dto {
  private constructor(public props: Partial<User>) {
    super()
  }

  static create(obj: { [key: string]: any }): [string?, SelectUserDto?] {
    const query: Partial<User> = {}

    for (const key of Object.keys(obj)) {
      if (Object.keys(userSchema).includes(key)) query[key as keyof User] = obj[key]
    }

    return [undefined, new SelectUserDto(query)]
  }
}
