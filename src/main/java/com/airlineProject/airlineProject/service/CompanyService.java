package com.airlineProject.airlineProject.service;

import com.airlineProject.airlineProject.model.Company;
import com.airlineProject.airlineProject.repository.CompanyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompanyService {
    @Autowired
    private CompanyRepo companyRepo;

    public Company saveCompany(Company company){
        return companyRepo.save(company);
    }

    public Company findCompanyById(Integer companyId){
        return companyRepo.findByCompanyId(companyId);
    }
}
