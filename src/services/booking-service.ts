import { forbiddenError, notFoundError } from "@/errors";
import { bookingRepository } from "@/repositories";

async function getBooking(userId: number) {
    const { Booking } = await bookingRepository.getUserInfosById(userId);
    if (!Booking) throw notFoundError('You dont have a booking yet');
    return Booking;
};


export const bookingService = {
    getBooking,
};