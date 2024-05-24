import { Role } from './role.enum'

export interface User {
  idUser: string
  email: string
  role: Role
  password: string
  names?: string
  surnames?: string
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}
