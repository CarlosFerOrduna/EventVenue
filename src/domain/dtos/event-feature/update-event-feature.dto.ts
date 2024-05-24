import { eventFeatureSchema } from '../../../config'
import { EventFeature } from '../../interfaces'
import { Dto } from '../dto'

export class UpdateEventFeatureDto extends Dto {
  private constructor(public idEventFeature: string, public props: Partial<EventFeature>) {
    super()
  }

  static create(obj: { [key: string]: any }): [string?, UpdateEventFeatureDto?] {
    const { idEventFeature, ...props } = obj

    if (!idEventFeature) return ['Missing id']

    const query: Partial<EventFeature> = {}

    for (const key of Object.keys(props)) {
      if (Object.keys(eventFeatureSchema).includes(key)) query[key as keyof EventFeature] = props[key]
    }

    return [undefined, new UpdateEventFeatureDto(idEventFeature, query)]
  }
}
