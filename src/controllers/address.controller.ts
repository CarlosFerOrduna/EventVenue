import { Request, Response } from 'express'
import { AddressEntity, CreateAddressDto, PaginationDto, SelectAddressDto, UpdateAddressDto } from '../domain'
import { Controller } from './controller'

export class AddressController extends Controller<AddressEntity> {
  create = async (req: Request, res: Response) => {
    try {
      const [error, createEventServiceDto] = CreateAddressDto.create(req.body)
      if (error) return res.status(400).json({ error })

      const result = await this.repository.create(createEventServiceDto!)

      return res.status(201).json(result)
    } catch (error) {
      this.handleError(error, res)
    }
  }

  getAll = async (req: Request, res: Response) => {
    try {
      const [_, selectAddressDto] = SelectAddressDto.select(req.query)
      const [error, paginationDto] = PaginationDto.create(req.query)
      if (error) return res.status(400).json({ error })

      const result = await this.repository.getAll(selectAddressDto, paginationDto)

      return res.json(result)
    } catch (error) {
      this.handleError(error, res)
    }
  }

  getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const result = await this.repository.getById(id)
      if (!result) {
        return res.status(404).json({ message: 'Address not found' })
      }

      return res.json(result)
    } catch (error) {
      this.handleError(error, res)
    }
  }

  updateById = async (req: Request, res: Response) => {
    try {
      const [error, updateAddressDto] = UpdateAddressDto.update({ idAddress: req.params.id, ...req.body })
      if (error) return res.status(400).json({ error })

      const result = await this.repository.updateById(updateAddressDto!)

      return res.json(result)
    } catch (error) {
      this.handleError(error, res)
    }
  }

  deleteById = async (req: Request, res: Response) => {
    try {
      const result = await this.repository.deleteById(req.params.id)
      if (!result) return res.status(404).json({ error: 'Address not found' })

      return res.status(201).json()
    } catch (error) {
      this.handleError(error, res)
    }
  }
}
