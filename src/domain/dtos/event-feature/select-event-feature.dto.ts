import { eventFeatureSchema } from '../../../config'
import { EventFeature } from '../../interfaces'
import { Dto } from '../dto'

export class SelectEventFeatureDto extends Dto {
  private constructor(public props: Partial<EventFeature>) {
    super()
  }

  static create(obj: { [key: string]: any }): [string?, SelectEventFeatureDto?] {
    const query: Partial<EventFeature> = {}

    for (const key of Object.keys(obj)) {
      if (Object.keys(eventFeatureSchema).includes(key)) query[key as keyof EventFeature] = obj[key]
    }

    return [undefined, new SelectEventFeatureDto(query)]
  }
}
