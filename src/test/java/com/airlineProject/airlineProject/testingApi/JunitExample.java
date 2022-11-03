package com.airlineProject.airlineProject.testingApi;

import com.airlineProject.airlineProject.controller.FlightController;
import com.airlineProject.airlineProject.model.Flight;
import com.airlineProject.airlineProject.repository.FlightRepo;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.assertTrue;

@RunWith(MockitoJUnitRunner.class)
public class JunitExample {

   private MockMvc mockMvc;

   ObjectMapper objectMapper = new ObjectMapper();
   ObjectWriter objectWriter = objectMapper.writer();

   @Mock
   private FlightRepo flightRepo;

   @InjectMocks
   private FlightController flightController;

   Flight RECORD_1 = new Flight();

}
