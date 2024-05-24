import { eventTypeSchema } from '../../../config'
import { EventType } from '../../interfaces'
import { Dto } from '../dto'

export class SelectEventTypeDto extends Dto {
  private constructor(public props: Partial<EventType>) {
    super()
  }

  static create(obj: { [key: string]: any }): [string?, SelectEventTypeDto?] {
    const query: Partial<EventType> = {}

    for (const key of Object.keys(obj)) {
      if (Object.keys(eventTypeSchema).includes(key)) query[key as keyof EventType] = obj[key]
    }

    return [undefined, new SelectEventTypeDto(query)]
  }
}
