package com.airlineProject.airlineProject.controller;

import com.airlineProject.airlineProject.model.Flight;
import com.airlineProject.airlineProject.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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


}
