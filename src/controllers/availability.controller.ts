import { Request, Response } from 'express'
import { AvailabilityEntity, CreateAvailabilityDto } from '../domain'
import { Controller } from './controller'

export class AvailabilityController extends Controller<AvailabilityEntity> {
  create = async (req: Request, res: Response) => {
    try {
      const [error, createEventServiceDto] = CreateAvailabilityDto.create(req.body)
      if (error) return res.status(400).json({ error })

      const result = await this.repository.create(createEventServiceDto!)

      res.status(201).json(result)
    } catch (error) {
      this.handleError(error, res)
    }
  }

  getAll = async (req: Request, res: Response) => {
    try {
      const result = await this.repository.getAll()

      res.json(result)
    } catch (error) {
      this.handleError(error, res)
    }
  }

  getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const result = await this.repository.getById(id)
      if (!result) {
        return res.status(404).json({ message: 'Availability not found' })
      }

      res.json(result)
    } catch (error) {
      this.handleError(error, res)
    }
  }

  updateById = async (req: Request, res: Response) => {
    try {
    } catch (error) {
      this.handleError(error, res)
    }
  }

  deleteById = async (req: Request, res: Response) => {
    try {
    } catch (error) {
      this.handleError(error, res)
    }
  }
}