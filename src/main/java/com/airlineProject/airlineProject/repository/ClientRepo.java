package com.airlineProject.airlineProject.repository;

import com.airlineProject.airlineProject.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepo extends JpaRepository<Client,Integer> {
}
