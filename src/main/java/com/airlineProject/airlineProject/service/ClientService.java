package com.airlineProject.airlineProject.service;

import com.airlineProject.airlineProject.model.Client;
import com.airlineProject.airlineProject.repository.ClientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService {
    @Autowired
    private ClientRepo clientRepo;

    public Client saveClient(Client client){
        return clientRepo.save(client);
    }

    public Client findClientById(Integer clientId){
        return clientRepo.findByClientId(clientId);
    }

    public Client clientBooking(Client client){
        return clientRepo.save(client);
    }
}
