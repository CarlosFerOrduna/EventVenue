import { Prisma } from '@prisma/client'

export const addressSchema = Prisma.AddressScalarFieldEnum
export const availabilitySchema = Prisma.AvailabilityScalarFieldEnum
export const eventFeatureSchema = Prisma.EventFeatureScalarFieldEnum
export const eventTypeEventFeatureSchema = Prisma.EventTypeEventFeatureScalarFieldEnum
export const eventTypeSchema = Prisma.EventTypeScalarFieldEnum
export const eventTypeVenueSchema = Prisma.EventTypeVenueScalarFieldEnum
export const reservationEventFeatureSchema = Prisma.ReservationEventFeatureScalarFieldEnum
export const reservationSchema = Prisma.ReservationScalarFieldEnum
export const userAddressSchema = Prisma.UserAddressScalarFieldEnum
export const userSchema = Prisma.UserScalarFieldEnum
export const venueAvailabilitySchema = Prisma.VenueAvailabilityScalarFieldEnum
export const venueSchema = Prisma.VenueScalarFieldEnum
