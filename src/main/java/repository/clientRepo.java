package repository;

import com.airlineProject.airlineProject.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface clientRepo extends JpaRepository<Client,Integer> {
}
