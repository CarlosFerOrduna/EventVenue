import { Prisma } from '@prisma/client'
import { Dto } from '../dto'

interface Props {
  streetName?: string
  streetNumber?: number
  zipCode?: string
  neighborhood?: string
  floor?: string
  apartment?: string
  city?: string
  state?: string
  country?: string
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

export class UpdateAddressDto extends Dto {
  private constructor(public idAddress: string, public props: Props) {
    super()
  }

  static update(obj: { [key: string]: any }): [string?, UpdateAddressDto?] {
    const { idAddress, ...props } = obj

    if (!idAddress) return ['Missing id']

    const query: Partial<Props> = {}

    for (const key of Object.keys(props)) {
      if (Object.keys(Prisma.AddressScalarFieldEnum).includes(key)) query[key as keyof Props] = props[key]
    }

    return [undefined, new UpdateAddressDto(idAddress, query)]
  }
}
