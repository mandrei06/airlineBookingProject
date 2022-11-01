package repository;

import com.airlineProject.airlineProject.models.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface companyRepo extends JpaRepository<Company,Integer> {
}
