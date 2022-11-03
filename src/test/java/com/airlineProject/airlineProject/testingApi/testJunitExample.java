package com.airlineProject.airlineProject.testingApi;

import com.airlineProject.airlineProject.controller.FlightController;
import com.airlineProject.airlineProject.model.Flight;
import com.airlineProject.airlineProject.repository.FlightRepo;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import junit.framework.TestCase;
import org.junit.Before;

import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static net.bytebuddy.matcher.ElementMatchers.is;
import static org.hamcrest.Matchers.hasSize;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(MockitoJUnitRunner.class)
public class testJunitExample extends TestCase {

   private MockMvc mockMvc;

   ObjectMapper objectMapper = new ObjectMapper();
   ObjectWriter objectWriter = objectMapper.writer();

   @Mock
   private FlightRepo flightRepo;

   @InjectMocks
   private FlightController flightController;

   Flight RECORD_1 = new Flight(0, 1, true,"Sevilla","Paris",402,"17/10/2022","2:30",true,0);
   Flight RECORD_2 = new Flight(1, 1, true,"London","Athens",40,"15/10/2022","2:30",true,0);

   @Before
   public void setUp() {
      MockitoAnnotations.openMocks(this);
      this.mockMvc = MockMvcBuilders.standaloneSetup(flightController).build();
   }
      @Test
      public void testGetAllRecords_success() throws Exception{
         List<Flight> flights = new ArrayList<>(Arrays.asList(RECORD_1,RECORD_2));
         System.out.println("1");
         Mockito.when(flightRepo.findAll()).thenReturn(flights);
         System.out.println("2");
         mockMvc.perform(MockMvcRequestBuilders.get("http://localhost:8080/flights/all").
                 contentType(MediaType.APPLICATION_JSON)).
                 andExpect(status().isOk()).
                 andExpect(MockMvcResultMatchers.jsonPath("$",hasSize(2)))
                 .andExpect((ResultMatcher) jsonPath("$[1].flightId", is(flights.get(1).getFlightId())));
      }
   }




