package com.airlineProject.airlineProject.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Booking {
    @Id
    private Integer bookingId;
    private Integer flightId;
    private Integer clientId;

}
