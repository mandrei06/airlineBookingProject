package com.airlineProject.airlineProject.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Client {
    @Id
    private Integer clientId;
    private String name;
    private String surname;
    private String nationality;
    private String passportId;
    private Integer age;
    private Boolean luggage;

}
