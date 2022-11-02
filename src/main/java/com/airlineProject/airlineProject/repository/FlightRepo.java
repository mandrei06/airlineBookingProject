package com.airlineProject.airlineProject.repository;

import com.airlineProject.airlineProject.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FlightRepo extends JpaRepository<Flight,Integer> {
    Flight findByFlightId(Integer flightId);
    @Query(value = "SELECT * FROM FLIGHT f WHERE f.origin = Seville",
            nativeQuery = true)
    List<Flight> findByFlightOrigin(String origin);

}
