package com.airlineProject.airlineProject.service;

import com.airlineProject.airlineProject.model.Booking;
import com.airlineProject.airlineProject.repository.BookingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {

    @Autowired
    private BookingRepo bookingRepo;

    public Booking saveBooking(Booking booking) {

        return bookingRepo.save(booking);
    }

    public Booking findBookingById(Integer bookingId) {
        return bookingRepo.findByBookingId(bookingId);
    }


}