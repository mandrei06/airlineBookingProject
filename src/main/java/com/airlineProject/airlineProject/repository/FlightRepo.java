package com.airlineProject.airlineProject.repository;

import com.airlineProject.airlineProject.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlightRepo extends JpaRepository<Flight,Integer> {
    Flight findByFlightId(Integer flightId);

}
