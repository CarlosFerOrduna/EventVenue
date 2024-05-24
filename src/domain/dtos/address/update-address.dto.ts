import { availabilitySchema } from '../../../config'
import { Address } from '../../interfaces'
import { Dto } from '../dto'

export class UpdateAddressDto extends Dto {
  private constructor(public idAddress: string, public props: Partial<Address>) {
    super()
  }

  static create(obj: { [key: string]: any }): [string?, UpdateAddressDto?] {
    const { idAddress, ...props } = obj

    if (!idAddress) return ['Missing id']

    const query: Partial<Address> = {}

    for (const key of Object.keys(props)) {
      if (Object.keys(availabilitySchema).includes(key)) query[key as keyof Address] = props[key]
    }

    return [undefined, new UpdateAddressDto(idAddress, query)]
  }
}
