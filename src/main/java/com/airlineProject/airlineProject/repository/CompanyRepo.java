package com.airlineProject.airlineProject.repository;

import com.airlineProject.airlineProject.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepo extends JpaRepository<Company,Integer> {
}
