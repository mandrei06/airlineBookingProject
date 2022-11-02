package com.airlineProject.airlineProject.models;

import com.airlineProject.airlineProject.model.Company;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CompanyTest {

    Company company;

    @BeforeEach
    void initializer() {
        company = new Company();
        company.setId(5);
        company.setName("COMPANY!");
    }

    @Test
    void getId() {
        Assertions.assertEquals(5, company.getId());

    }

    @Test
    void setId() {
        company.setId(6);
        Assertions.assertEquals(6, company.getId());
    }

    @Test
    void getName() {
        Assertions.assertEquals("COMPANY!", company.getName());
    }

    @Test
    void setName() {
        company.setName("Test");
        Assertions.assertEquals("Test", company.getName());
    }

    @Test
    void testToString() {
    }
}