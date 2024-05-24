import { availabilitySchema } from '../../../config'
import { Availability } from '../../interfaces'
import { Dto } from '../dto'

export class SelectAvailabilityDto extends Dto {
  private constructor(public props: Partial<Availability>) {
    super()
  }

  static create(obj: { [key: string]: any }): [string?, SelectAvailabilityDto?] {
    const query: Partial<Availability> = {}

    for (const key of Object.keys(obj)) {
      if (Object.keys(availabilitySchema).includes(key)) query[key as keyof Availability] = obj[key]
    }

    return [undefined, new SelectAvailabilityDto(query)]
  }
}
