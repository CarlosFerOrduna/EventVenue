import { venueSchema } from '../../../config'
import { Venue } from '../../interfaces'
import { Dto } from '../dto'

export class SelectVenueDto extends Dto {
  private constructor(public props: Partial<Venue>) {
    super()
  }

  static create(obj: { [key: string]: any }): [string?, SelectVenueDto?] {
    const query: Partial<Venue> = {}

    for (const key of Object.keys(obj)) {
      if (Object.keys(venueSchema).includes(key)) query[key as keyof Venue] = obj[key]
    }

    return [undefined, new SelectVenueDto(query)]
  }
}
