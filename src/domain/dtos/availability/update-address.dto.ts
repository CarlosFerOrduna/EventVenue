import { availabilitySchema } from '../../../config'
import { Availability } from '../../interfaces'
import { Dto } from '../dto'

export class UpdateAvailabilityDto extends Dto {
  private constructor(public idAvailability: string, public props: Partial<Availability>) {
    super()
  }

  static create(obj: { [key: string]: any }): [string?, UpdateAvailabilityDto?] {
    const { idAvailability, ...props } = obj

    if (!idAvailability) return ['Missing id']

    const query: Partial<Availability> = {}

    for (const key of Object.keys(props)) {
      if (Object.keys(availabilitySchema).includes(key)) query[key as keyof Availability] = props[key]
    }

    return [undefined, new UpdateAvailabilityDto(idAvailability, query)]
  }
}
