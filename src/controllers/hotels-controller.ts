import { Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import { hotelsService } from '@/services';

export async function getHotels(req: AuthenticatedRequest, res: Response) {
  const hotels = await hotelsService.getHotels(req.userId);
  res.status(httpStatus.OK).send(hotels);
}

export async function getHotelsById(req: AuthenticatedRequest, res: Response) {
  const hotelId = parseInt(req.params.hotelId) as number;
  const hotel = await hotelsService.getHotelsById(req.userId, hotelId);
  res.status(httpStatus.OK).send(hotel);
}
