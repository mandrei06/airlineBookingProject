package com.airlineProject.airlineProject.repository;

import com.airlineProject.airlineProject.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepo extends JpaRepository<Booking,Integer> {
    Booking findByBookingId(Integer bookingId);
}
