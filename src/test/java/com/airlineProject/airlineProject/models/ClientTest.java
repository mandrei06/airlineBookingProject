package com.airlineProject.airlineProject.models;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class ClientTest {
    Client client;
    @BeforeEach
    void initializer(){
        client=new Client();
        client.setId(1);
        client.setName("Petros");
        client.setSurname("Grivas");
        client.setNationality("Irish");
        client.setPassportId("123456789012");
        client.setAge(84);
        client.setLuggage(true);
    }

    @Test
    void getId() {
        Assertions.assertEquals(1,client.getId());
    }

    @Test
    void setId() {
        client.setId(2);
        Assertions.assertEquals(2,client.getId());
    }

    @Test
    void getName() {
        Assertions.assertEquals("Petros",client.getName());
    }

    @Test
    void setName() {
        client.setName("Sean");
        Assertions.assertEquals("Sean",client.getName());
    }

    @Test
    void getSurname() {
        Assertions.assertEquals("Grivas",client.getSurname());
    }

    @Test
    void setSurname() {
        client.setSurname("Marincas");
        Assertions.assertEquals("Marincas",client.getSurname());
    }

    @Test
    void getNationality() {
        Assertions.assertEquals("Irish",client.getNationality());
    }

    @Test
    void setNationality() {
        client.setNationality("Romanian");
        Assertions.assertEquals("Romanian",client.getNationality());
    }

    @Test
    void getPassportId() {
        Assertions.assertEquals("123456789012",client.getPassportId());
    }

    @Test
    void setPassportId() {
        client.setPassportId("666");
        Assertions.assertEquals("666",client.getPassportId());
    }

    @Test
    void getAge() {
        Assertions.assertEquals(84,client.getAge());
    }

    @Test
    void setAge() {
        client.setAge(89);
        Assertions.assertEquals(89,client.getAge());
    }

    @Test
    void getLuggage() {
        Assertions.assertTrue(client.getLuggage());
    }

    @Test
    void setLuggage() {
        client.setLuggage(false);
        Assertions.assertFalse(client.getLuggage());
    }

}