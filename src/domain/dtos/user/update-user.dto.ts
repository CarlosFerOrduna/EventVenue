import { userSchema } from '../../../config'
import { User } from '../../interfaces'
import { Dto } from '../dto'

export class UpdateUserDto extends Dto {
  private constructor(public idUser: string, public props: Partial<User>) {
    super()
  }

  static create(obj: { [key: string]: any }): [string?, UpdateUserDto?] {
    const { idUser, ...props } = obj

    if (!idUser) return ['Missing id']

    const query: Partial<User> = {}

    for (const key of Object.keys(props)) {
      if (Object.keys(userSchema).includes(key)) query[key as keyof User] = props[key]
    }

    return [undefined, new UpdateUserDto(idUser, query)]
  }
}
