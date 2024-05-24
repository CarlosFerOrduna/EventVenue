import { CustomError } from '../errors'
import { Entity } from './entity'

export interface UserAddress {
  idUserAddress: string
  idUser: string
  idAddress: string
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}

export class UserAddressEntity extends Entity {
  constructor(
    public idUserAddress: string,
    public idUser: string,
    public idAddress: string,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt?: Date,
  ) {
    super()
  }

  static fromObject(obj: { [key: string]: any }) {
    const { idUserAddress, idUser, idAddress, createdAt, updatedAt, deletedAt } = obj

    if (!idUserAddress) CustomError.badRequest('Missing idUserAddress')
    if (!idUser) CustomError.badRequest('Missing idUser')
    if (!idAddress) CustomError.badRequest('Missing idAddress')

    return new UserAddressEntity(idUserAddress, idUser, idAddress, createdAt, updatedAt, deletedAt)
  }
}
