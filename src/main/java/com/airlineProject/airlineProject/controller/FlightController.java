package com.airlineProject.airlineProject.controller;

import com.airlineProject.airlineProject.model.Flight;
import com.airlineProject.airlineProject.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/flights")
public class FlightController {
    @Autowired
    FlightService flightService;

    @PostMapping("/")
    public Flight saveFlight(@RequestBody Flight flight){
        return flightService.saveFlight(flight);
    }
    @GetMapping("/{id}")
    public Flight findFlightById(@PathVariable("id") Integer flightId){
        return flightService.findFlightById(flightId);
    }
    @GetMapping("/all")
    public List<Flight> findAllFlights(){
        return flightService.findAllFlights();
    }

    @GetMapping("/list/{origin}")
    public List<Flight> returnAvailableFlight(@PathVariable("origin") String origin){
        System.out.println(flightService.findFlightsByOrigin(origin));
        return flightService.findFlightsByOrigin(origin);}

    @GetMapping("/list/{origin}/{destination}/price")
    public Integer returnFlightPrice(@PathVariable("origin")String origin, @PathVariable("destination")String destination){
        return flightService.findOriginAndDestinationPrice(origin,destination);
    }

   /* @GetMapping("/list/{origin}/{destination}/price/luggage")
    public Integer returnPriceWithLuggageOrNot(@PathVariable String origin, @PathVariable String destination,Integer luggageTrueOrFalse){
        return flightService.priceWithLuggage(origin,destination,0);
    }*/

    @GetMapping("/{origin}/priceWithLuggage")
    public Integer returnPriceWithLuggage(@PathVariable("origin") String origin){
        return flightService.priceWithLuggage(origin)+30;
    }

    @GetMapping("/{origin}/priceWithoutLuggage")
    public Integer returnPriceWithoutLuggage(@PathVariable("origin")String origin){
        return flightService.priceWithoutLuggage(origin);
    }

    @GetMapping("/{origin}/destinations")
    public String returnDestinationByOrigin(@PathVariable("origin")String origin){
        return flightService.destinationByOrigin(origin);
    }

}
