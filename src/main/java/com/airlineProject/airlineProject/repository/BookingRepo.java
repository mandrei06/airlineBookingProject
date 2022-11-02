package com.airlineProject.airlineProject.repository;

import com.airlineProject.airlineProject.model.Booking;
import com.airlineProject.airlineProject.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepo extends JpaRepository<Booking,Integer> {
    Booking findByBookingId(Integer bookingId);


}
