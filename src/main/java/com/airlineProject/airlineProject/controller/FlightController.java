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


}
