import { Router } from 'express'
import { VenueController } from '../controllers'
import { VenueRepository } from '../repositories'
import { VenueService } from '../services'

export class VenueRoutes {
  static get routes(): Router {
    const router = Router()

    const service = new VenueService()
    const repository = new VenueRepository(service)
    const controller = new VenueController(repository)

    router.get('/', controller.getAll)
    router.get('/:id', controller.getById)
    router.post('/', controller.create)
    router.put('/:id', controller.updateById)
    router.delete('/:id', controller.deleteById)

    return router
  }
}
