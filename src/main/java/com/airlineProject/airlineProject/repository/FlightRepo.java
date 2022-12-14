package com.airlineProject.airlineProject.repository;

import com.airlineProject.airlineProject.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface FlightRepo extends JpaRepository<Flight,Integer> {
    Flight findByFlightId(Integer flightId);

    @Query(value = "SELECT * FROM FLIGHT f WHERE f.origin =:origin",
            nativeQuery = true)
    List<Flight> findByFlightOrigin(@Param("origin")String origin);

    @Query(value = "SELECT PRICE p FROM FLIGHT f WHERE f.origin=:origin AND f.destination=:destination",nativeQuery = true)
    List<Integer> findPriceByOriginAndDestination(@Param("origin")String origin, @Param("destination")String destination);

    @Query(value = "SELECT PRICE p FROM FLIGHT f WHERE f.origin=:origin" ,nativeQuery = true)
    Integer findPriceWithLuggageById(@Param("origin")String origin);


    @Query(value = "SELECT DISTINCT destination d FROM FLIGHT f WHERE f.origin =:origin",nativeQuery = true)
    ArrayList<String> findDestinationByOrigin(String origin);

    @Query(value = "SELECT date d FROM FLIGHT f WHERE f.origin =:origin AND f.destination =:destination",nativeQuery = true)
    ArrayList<String> findFlightDateByOriginAndDestination(String origin, String destination);


    @Query(value = "SELECT * FROM flight WHERE origin in (SELECT origin FROM flight GROUP BY origin HAVING COUNT(origin)=1)",nativeQuery = true)
    List<Flight> findDistinctAll();
}
