package com.airlineProject.airlineProject.service;

import com.airlineProject.airlineProject.model.Flight;
import com.airlineProject.airlineProject.repository.BookingRepo;
import com.airlineProject.airlineProject.repository.FlightRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
    public List<Flight> findFlightsByOrigin(String origin) {
        return flightRepo.findByFlightOrigin(origin);
    }

    public List<Flight> findAllFlights() {
        return flightRepo.findAll();
    }
    public Integer findOriginAndDestinationPrice(String origin, String destination){
        return flightRepo.findPriceByOriginAndDestination(origin,destination);
    }
    /*public Integer priceWithLuggage(String origin, String destination,Integer luggageTrueOrFalse){
        return (luggageTrueOrFalse==1)? flightRepo.findPriceByOriginAndDestination(origin,destination)+50:flightRepo.findPriceByOriginAndDestination(origin,destination) ;
    }*/

    public Integer priceWithLuggage(String origin){
        return flightRepo.findPriceWithLuggageById(origin);
    }

    public Integer priceWithoutLuggage(String origin){
        return flightRepo.findPriceWithLuggageById(origin);
    }

    public String destinationByOrigin(String origin){
        return flightRepo.findDestinationByOrigin(origin);
    }

    public ArrayList<String> dateByOriginAndDestination(String origin, String destination){
        return flightRepo.findFlightDateByOriginAndDestination(origin,destination);
    }
}
