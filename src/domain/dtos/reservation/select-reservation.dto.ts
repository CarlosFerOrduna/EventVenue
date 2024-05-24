import { reservationSchema } from '../../../config'
import { Reservation } from '../../interfaces'
import { Dto } from '../dto'

export class SelectReservationDto extends Dto {
  private constructor(public props: Partial<Reservation>) {
    super()
  }

  static create(obj: { [key: string]: any }): [string?, SelectReservationDto?] {
    const query: Partial<Reservation> = {}

    for (const key of Object.keys(obj)) {
      if (Object.keys(reservationSchema).includes(key)) query[key as keyof Reservation] = obj[key]
    }

    return [undefined, new SelectReservationDto(query)]
  }
}
