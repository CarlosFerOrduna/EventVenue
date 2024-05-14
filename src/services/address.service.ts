import {
  AddressEntity,
  CreateAddressDto,
  CustomError,
  PaginationDto,
  SelectAddressDto,
  UpdateAddressDto,
} from '../domain'
import { Service } from './service'

export class AddressService extends Service<AddressEntity> {
  async create(createAddressDto: CreateAddressDto): Promise<AddressEntity> {
    const result = await this.prismaClient.address.create({
      data: createAddressDto,
    })

    return AddressEntity.fromObject(result)
  }

  async getAll(selectDto: SelectAddressDto, paginationDto: PaginationDto): Promise<AddressEntity[]> {
    const { page, limit } = paginationDto
    const results = await this.prismaClient.address.findMany({
      where: { ...selectDto.props },
      skip: (page - 1) * limit,
      take: limit,
    })

    return results.map(AddressEntity.fromObject)
  }

  async getById(id: string): Promise<AddressEntity> {
    const result = await this.prismaClient.address.findFirst({
      where: { idAddress: id },
    })

    if (!result) CustomError.notFound('Address not found')

    return AddressEntity.fromObject({ ...result })
  }

  async updateById(dto: UpdateAddressDto): Promise<AddressEntity> {
    const result = await this.prismaClient.address.update({
      where: { idAddress: dto.idAddress },
      data: { ...dto.props },
    })

    return AddressEntity.fromObject(result)
  }

  async deleteById(id: string): Promise<boolean> {
    const result = await this.prismaClient.address.delete({
      where: { idAddress: id },
    })

    if (!result) CustomError.notFound('Address not found')

    return !!result
  }
}
