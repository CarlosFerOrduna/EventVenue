import { Dto } from "../dto";

interface Props {
  streetName?: string;
  streetNumber?: number;
  zipCode?: string;
  neighborhood?: string;
  floor?: string;
  apartment?: string;
  city?: string;
  state?: string;
  country?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export class UpdateAddressDto extends Dto {
  private constructor(public idAddress: string, public props: Props) {
    super();
  }

  static create(obj: { [key: string]: any }): [string?, UpdateAddressDto?] {
    const { idAddress, ...props } = obj;

    return [undefined, new UpdateAddressDto(idAddress, props)];
  }
}
