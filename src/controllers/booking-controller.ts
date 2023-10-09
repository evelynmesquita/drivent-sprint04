import { InputBookingBody } from './../protocols';
import { Response } from 'express';
import { AuthenticatedRequest } from "@/middlewares";
import { bookingService } from '@/services';
import httpStatus from 'http-status';

export async function getBooking(req: AuthenticatedRequest, res: Response) {
    const booking = await bookingService.getBooking(req.userId);
    res.status(httpStatus.OK).send(booking);
};