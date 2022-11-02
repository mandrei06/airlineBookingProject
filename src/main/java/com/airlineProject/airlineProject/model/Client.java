package com.airlineProject.airlineProject.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "client")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Client {
    @Id
    private Integer id;
    private String name;
    private String surname;
    private String nationality;
    private String passportId;
    private Integer age;
    private Boolean luggage;


}
