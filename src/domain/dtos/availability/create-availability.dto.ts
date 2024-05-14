import { Dto } from '../dto'

export class CreateAvailabilityDto extends Dto {
  private constructor(
    public dateOfWeek: number,
    public startTime: string,
    public endTime: string,
    public description?: string,
  ) {
    super()
  }

  static create(props: { [key: string]: any }): [string?, CreateAvailabilityDto?] {
    const { description, dateOfWeek, startTime, endTime } = props

    if (!!description && description.trim().length < 1) return ['description is not valid']
    if (!dateOfWeek || dateOfWeek.trim().length < 1) return ['dateOfWeek is not valid']
    if (!startTime || startTime.trim().length < 1) return ['startTime is not valid']
    if (!endTime || endTime.trim().length < 1) return ['endTime is not valid']

    return [undefined, new CreateAvailabilityDto(dateOfWeek, startTime, endTime, description)]
  }
}
