import { Request, Response, Router } from 'express'
import { AddressRoutes } from './address.routes'
import { AvailabilityRoutes } from './availability.routes'
import { EventFeatureRoutes } from './event-feature.routes'
import { EventTypeRoutes } from './event-type.routes'
import { ReservationRoutes } from './reservation.routes'
import { UserRoutes } from './user.routes'
import { VenueRoutes } from './venue.routes'

export class AppRoutes {
  static get routes(): Router {
    const router = Router()

    router.use('/api/address', AddressRoutes.routes)
    router.use('/api/availability', AvailabilityRoutes.routes)
    router.use('/api/event-feature', EventFeatureRoutes.routes)
    router.use('/api/event-type', EventTypeRoutes.routes)
    router.use('/api/reservation', ReservationRoutes.routes)
    router.use('/api/user', UserRoutes.routes)
    router.use('/api/venue', VenueRoutes.routes)
    router.use('*', (req: Request, res: Response) => res.status(404).json({ error: 'not found' }))

    return router
  }
}
