package com.airlineProject.airlineProject.repository;

import com.airlineProject.airlineProject.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepo extends JpaRepository<Company,Integer> {
    Company findByCompanyId(Integer companyId);
}
