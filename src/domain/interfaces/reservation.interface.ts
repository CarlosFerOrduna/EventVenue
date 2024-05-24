export interface Reservation {
  idReservation: string
  idVenue: string
  idEventType: string
  date: Date
  createdAt: Date
  updatedAt: Date
  description?: string
  start?: Date
  end?: Date
  deletedAt?: Date
}
