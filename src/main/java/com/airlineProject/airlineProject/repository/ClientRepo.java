package com.airlineProject.airlineProject.repository;

import com.airlineProject.airlineProject.model.Client;
import com.airlineProject.airlineProject.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepo extends JpaRepository<Client,Integer> {
    Client findByClientId(Integer clientId);
}
