import { Dto } from '../dto'

export class CreateEventTypeDto extends Dto {
  private constructor(public name: string, public description?: string) {
    super()
  }

  static create(props: { [key: string]: any }): [string?, CreateEventTypeDto?] {
    const { name, description } = props

    if (!!name && name.trim().length < 1) return ['name is not valid']
    if (!!description && description.trim().length < 1) return ['description is not valid']

    return [undefined, new CreateEventTypeDto(name, description)]
  }
}
