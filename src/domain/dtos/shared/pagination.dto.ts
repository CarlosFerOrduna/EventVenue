import { Dto } from '../dto'

export class PaginationDto extends Dto {
  private constructor(public readonly page: number, public readonly limit: number) {
    super()
  }

  static create(obj: { [key: string]: any }): [string?, PaginationDto?] {
    const { page = 1, limit = 10 } = obj
    if (isNaN(page)) return ['Page must be a number']
    if (page < 1) return ['Page must be greater than 0']
    if (isNaN(limit)) return ['Take must be a number']
    if (limit < 1) return ['Limit must be greater than 0']

    return [undefined, new PaginationDto(+page, +limit)]
  }
}
