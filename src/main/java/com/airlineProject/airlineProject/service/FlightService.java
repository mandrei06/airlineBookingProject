package com.airlineProject.airlineProject.service;

import com.airlineProject.airlineProject.model.Flight;
import com.airlineProject.airlineProject.repository.FlightRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FlightService {
    @Autowired
    private FlightRepo flightRepo;

    public Flight saveFlight(Flight flight) {
        return flightRepo.save(flight);
    }

   public Flight findFlightById(Integer flightId) {
        return flightRepo.findByFlightId(flightId);

    }

}
