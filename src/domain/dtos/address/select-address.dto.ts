import { addressSchema } from '../../../config'
import { Address } from '../../interfaces'
import { Dto } from '../dto'

export class SelectAddressDto extends Dto {
  private constructor(public props: Partial<Address>) {
    super()
  }

  static create(obj: { [key: string]: any }): [string?, SelectAddressDto?] {
    const query: Partial<Address> = {}

    for (const key of Object.keys(obj)) {
      if (Object.keys(addressSchema).includes(key)) query[key as keyof Address] = obj[key]
    }

    return [undefined, new SelectAddressDto(query)]
  }
}
