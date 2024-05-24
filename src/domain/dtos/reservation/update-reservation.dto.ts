import { reservationSchema } from '../../../config'
import { Reservation } from '../../interfaces'
import { Dto } from '../dto'

export class UpdateReservationDto extends Dto {
  private constructor(public idReservation: string, public props: Partial<Reservation>) {
    super()
  }

  static create(obj: { [key: string]: any }): [string?, UpdateReservationDto?] {
    const { idReservation, ...props } = obj

    if (!idReservation) return ['Missing id']

    const query: Partial<Reservation> = {}

    for (const key of Object.keys(props)) {
      if (Object.keys(reservationSchema).includes(key)) query[key as keyof Reservation] = props[key]
    }

    return [undefined, new UpdateReservationDto(idReservation, query)]
  }
}
