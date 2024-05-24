import { venueSchema } from '../../../config'
import { Venue } from '../../interfaces'
import { Dto } from '../dto'

export class UpdateVenueDto extends Dto {
  private constructor(public idVenue: string, public props: Partial<Venue>) {
    super()
  }

  static create(obj: { [key: string]: any }): [string?, UpdateVenueDto?] {
    const { idVenue, ...props } = obj

    if (!idVenue) return ['Missing id']

    const query: Partial<Venue> = {}

    for (const key of Object.keys(props)) {
      if (Object.keys(venueSchema).includes(key)) query[key as keyof Venue] = props[key]
    }

    return [undefined, new UpdateVenueDto(idVenue, query)]
  }
}
