package com.airlineProject.airlineProject.controller;

import com.airlineProject.airlineProject.model.Company;
import com.airlineProject.airlineProject.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/companies")
public class CompanyController {
    @Autowired
    private CompanyService companyService;

    @PostMapping("/")
    public Company saveCompany(@RequestBody Company company) {
        return companyService.saveCompany(company);
    }

    @GetMapping("/{id}")
    public Company findCompanyById(@PathVariable("id") Integer companyId) {
        return companyService.findCompanyById(companyId);
    }

}
