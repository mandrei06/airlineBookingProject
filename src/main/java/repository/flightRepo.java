package repository;

import com.airlineProject.airlineProject.models.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface flightRepo extends JpaRepository<Flight,Integer> {
}
