import { Dto } from '../dto'

export class CreateEventFeatureDto extends Dto {
  private constructor(public name: string, public price: number, public description?: string) {
    super()
  }

  static create(props: { [key: string]: any }): [string?, CreateEventFeatureDto?] {
    const { name, price, description } = props

    if (!!name && name.trim().length < 1) return ['name is not valid']
    if (!!price && isNaN(price)) return ['price is not valid']
    if (!!description && description.trim().length < 1) return ['description is not valid']

    return [undefined, new CreateEventFeatureDto(name, price, description)]
  }
}
