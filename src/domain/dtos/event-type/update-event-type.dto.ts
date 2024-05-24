import { eventTypeSchema } from '../../../config'
import { EventType } from '../../interfaces'
import { Dto } from '../dto'

export class UpdateEventTypeDto extends Dto {
  private constructor(public idEventType: string, public props: Partial<EventType>) {
    super()
  }

  static create(obj: { [key: string]: any }): [string?, UpdateEventTypeDto?] {
    const { idEventType, ...props } = obj

    if (!idEventType) return ['Missing id']

    const query: Partial<EventType> = {}

    for (const key of Object.keys(props)) {
      if (Object.keys(eventTypeSchema).includes(key)) query[key as keyof EventType] = props[key]
    }

    return [undefined, new UpdateEventTypeDto(idEventType, query)]
  }
}
