import { Dto } from "../dto";

export class CreateAddressDto extends Dto {
  private constructor(
    public streetName?: string,
    public streetNumber?: number,
    public zipCode?: string,
    public neighborhood?: string,
    public floor?: string,
    public apartment?: string,
    public city?: string,
    public state?: string,
    public country?: string,
  ) {
    super();
  }

  static create(props: { [key: string]: any }): [string?, CreateAddressDto?] {
    const {
      streetName,
      streetNumber,
      zipCode,
      neighborhood,
      floor,
      apartment,
      city,
      state,
      country,
    } = props;

    if (!!streetName && streetName.trim().length < 1)
      return ["streetName is not valid"];
    if (!!streetNumber && streetNumber.trim().length < 1)
      return ["streetNumber is not valid"];
    if (!!zipCode && zipCode.trim().length < 1) return ["zipCode is not valid"];
    if (!!neighborhood && neighborhood.trim().length < 1)
      return ["neighborhood is not valid"];
    if (!!floor && floor.trim().length < 1) return ["floor is not valid"];
    if (!!apartment && apartment.trim().length < 1)
      return ["apartment is not valid"];
    if (!!city && city.trim().length < 1) return ["city is not valid"];
    if (!!state && state.trim().length < 1) return ["state is not valid"];
    if (!!country && country.trim().length < 1) return ["country is not valid"];

    return [
      undefined,
      new CreateAddressDto(
        streetName,
        streetNumber,
        zipCode,
        neighborhood,
        floor,
        apartment,
        city,
        state,
        country,
      ),
    ];
  }
}
