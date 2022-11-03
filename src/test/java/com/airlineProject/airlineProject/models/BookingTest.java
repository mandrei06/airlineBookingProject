package com.airlineProject.airlineProject.models;

import com.airlineProject.airlineProject.model.Booking;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class BookingTest {
    Booking booking;

    @BeforeEach
    public void initializer(){
        booking = new Booking();
        booking.setBookingId(1);
        booking.setClientId(2);
        booking.setFlightId(3);
    }


    @Test
    void getBookingId() {
        Assertions.assertEquals(1, booking.getBookingId());
    }

    @Test
    void setBookingId() {
        booking.setBookingId(5);
        Assertions.assertEquals(5, booking.getBookingId());
    }

    @Test
    void getFlightId() {
        Assertions.assertEquals(3, booking.getFlightId());
    }

    @Test
    void setFlightId() {
        booking.setFlightId(6);
        Assertions.assertEquals(6, booking.getFlightId());
    }

    @Test
    void getClientId() {
        Assertions.assertEquals(2, booking.getClientId());
    }

    @Test
    void setClientId() {
        booking.setClientId(7);
        Assertions.assertEquals(7, booking.getClientId());
    }

    @Test
    void testToString() {

    }

}