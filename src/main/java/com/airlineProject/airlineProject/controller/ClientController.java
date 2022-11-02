package com.airlineProject.airlineProject.controller;

import com.airlineProject.airlineProject.model.Client;
import com.airlineProject.airlineProject.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/clients")
public class ClientController {
    @Autowired
    private ClientService clientService;

    @PostMapping("/")
    public Client saveClient(@RequestBody Client client){

        return clientService.saveClient(client);
    }

    @GetMapping("/{id}")
    public Client findClientById(@PathVariable("id") Integer clientId) {
        return clientService.findClientById(clientId);
    }
}
