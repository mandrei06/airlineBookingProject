package com.airlineProject.airlineProject.controller;

import com.airlineProject.airlineProject.model.Booking;
import com.airlineProject.airlineProject.model.Flight;
import com.airlineProject.airlineProject.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {
    @Autowired
    private BookingService bookingService;




    @PostMapping("/")
    public Booking saveBooking(@RequestBody Booking booking){
        return bookingService.saveBooking(booking);
    }



    @GetMapping("/{id}")
    public Booking findBookingById(@PathVariable("id") Integer bookingId){
        return bookingService.findBookingById(bookingId);
    }
}
