export interface Availability {
  idAvailability: string
  dateOfWeek: number
  startTime: Date
  endTime: Date
  createdAt: Date
  updatedAt: Date
  description?: string
  deletedAt?: Date
}
