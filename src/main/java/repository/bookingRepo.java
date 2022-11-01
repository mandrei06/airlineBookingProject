package repository;

import com.airlineProject.airlineProject.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface bookingRepo extends JpaRepository<Booking,Integer> {
}
