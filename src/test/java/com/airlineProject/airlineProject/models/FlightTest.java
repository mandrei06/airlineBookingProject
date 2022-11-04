package com.airlineProject.airlineProject.models;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Duration;

import com.airlineProject.airlineProject.model.Flight;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Date;

/*class FlightTest {
Flight flight;
Date date1;
Duration duration;
    @BeforeEach
    void initializer() throws ParseException {
        flight=new Flight();
        flight.setId(1);
        flight.setCompanyId(1);
        flight.setReturning(true);
        flight.setOrigin("Seville");
        flight.setDestination("Ireland");
        flight.setPrice(160);
        String date  = "15/10/2022";
        date1 = new SimpleDateFormat("dd/MM/yyyy").parse(date);
        flight.setDate(date1);
        flight.setDuration("1:30");
        flight.setLayovers(2);
        flight.setLuggage(true);
    }
    @Test
    void getId() {
        Assertions.assertEquals(1,flight.getId());
    }

    @Test
    void setId() {
        flight.setId(3);
        Assertions.assertEquals(3,flight.getId());
    }

    @Test
    void getCompanyId() {
        Assertions.assertEquals(1,flight.getCompanyId());
    }

    @Test
    void setCompanyId() {
        flight.setCompanyId(3);
        Assertions.assertEquals(3,flight.getCompanyId());
    }

    @Test
    void isReturning() {
        Assertions.assertTrue(true);
    }

    @Test
    void setReturning() {
        flight.setReturning(true);
        Assertions.assertTrue(true);
    }

    @Test
    void getOrigin() {
        Assertions.assertEquals("Seville",flight.getOrigin());
    }

    @Test
    void setOrigin() {
        flight.setOrigin("Ireland");
        Assertions.assertEquals("Ireland",flight.getOrigin());
    }

    @Test
    void getDestination() {
        Assertions.assertEquals("Ireland",flight.getDestination());
    }

    @Test
    void setDestination() {
        flight.setDestination("Greece");
        Assertions.assertEquals("Greece",flight.getDestination());
    }

    @Test
    void getPrice() {
        Assertions.assertEquals(160,flight.getPrice());
    }

    @Test
    void setPrice() {
        flight.setPrice(400);
        Assertions.assertEquals(400,flight.getPrice());
    }

    @Test
    void getDate() throws ParseException {
        Assertions.assertEquals(date1,flight.getDate());
    }

    @Test
    void setDate() throws ParseException {
        Date date2 = new SimpleDateFormat("dd/MM/yyyy").parse("16/10/2022");
        flight.setDate(date2);
        Assertions.assertEquals(date2,flight.getDate());
    }

    @Test
    void getDuration() {
        Assertions.assertEquals("1:30",flight.getDuration());
    }

    @Test
    void setDuration() {
        flight.setDuration("1:45");
        Assertions.assertEquals("1:45",flight.getDuration());
    }

    @Test
    void isLuggage() {

    }

    @Test
    void setLuggage() {
        Assertions.assertTrue(true);
    }

    @Test
    void getLayovers() {
        Assertions.assertEquals(2,flight.getLayovers());
    }

    @Test
    void setLayovers() {
        flight.setLayovers(0);
        Assertions.assertEquals(0,flight.getLayovers());
    }
}*/