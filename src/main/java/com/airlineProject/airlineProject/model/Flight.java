package com.airlineProject.airlineProject.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Duration;
import java.util.Date;
@Entity
@Table(name = "flight")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Flight {
    @Id
    private Integer flightId;
    private Integer companyId;
    private Boolean returning;
    private String origin;
    private String destination;
    private Integer price;
    private String date;
    private String duration;
    private Boolean luggage;
    private Integer layovers;


}
