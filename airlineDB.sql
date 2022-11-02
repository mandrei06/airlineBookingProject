-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.25-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for airline
DROP DATABASE IF EXISTS `airline`;
CREATE DATABASE IF NOT EXISTS `airline` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `airline`;

-- Dumping structure for table airline.booking
DROP TABLE IF EXISTS `booking`;
CREATE TABLE IF NOT EXISTS `booking` (
  `bookingId` int(11) NOT NULL,
  `flightId` int(11) NOT NULL,
  `clientId` int(11) NOT NULL,
  PRIMARY KEY (`bookingId`) USING BTREE,
  KEY `FK__flight` (`flightId`),
  KEY `FK_booking_client` (`clientId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table airline.booking: ~1 rows (approximately)
INSERT INTO `booking` (`bookingId`, `flightId`, `clientId`) VALUES
	(1, 13, 166);

-- Dumping structure for table airline.client
DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `clientId` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `surname` varchar(50) DEFAULT NULL,
  `nationality` varchar(50) DEFAULT NULL,
  `passportId` varchar(50) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `luggage` int(11) DEFAULT NULL,
  PRIMARY KEY (`clientId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table airline.client: ~3 rows (approximately)
INSERT INTO `client` (`clientId`, `name`, `surname`, `nationality`, `passportId`, `age`, `luggage`) VALUES
	(1, 'Andy', 'Marincas', 'romanian', '12345', 24, 1),
	(2, 'Petros', 'Grivas', 'greek', '123456', 26, 0),
	(3, 'Sean', 'Hallinan', 'irish', '4343412', 23, 1);

-- Dumping structure for table airline.company
DROP TABLE IF EXISTS `company`;
CREATE TABLE IF NOT EXISTS `company` (
  `companyId` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`companyId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table airline.company: ~3 rows (approximately)
INSERT INTO `company` (`companyId`, `name`) VALUES
	(1, 'WizzAir'),
	(2, 'AEGEAN'),
	(3, 'Lufthansa');

-- Dumping structure for table airline.flight
DROP TABLE IF EXISTS `flight`;
CREATE TABLE IF NOT EXISTS `flight` (
  `flightId` int(11) NOT NULL,
  `companyId` int(11) NOT NULL,
  `returning` tinyint(4) DEFAULT NULL,
  `origin` varchar(50) DEFAULT NULL,
  `destination` varchar(50) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `date` varchar(50) DEFAULT NULL,
  `duration` varchar(50) DEFAULT NULL,
  `layovers` int(11) DEFAULT NULL,
  `luggage` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`flightId`) USING BTREE,
  KEY `FK__company` (`companyId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table airline.flight: ~22 rows (approximately)
INSERT INTO `flight` (`flightId`, `companyId`, `returning`, `origin`, `destination`, `price`, `date`, `duration`, `layovers`, `luggage`) VALUES
	(0, 1, 1, 'Sevilla', 'Paris', '402', '17/10/2022', '2:30', 0, 1),
	(1, 1, 1, 'London', 'Athens', '40', '15/10/2022', '2:30', 0, 1),
	(2, 1, 1, 'Athens', 'London', '40', '16/10/2022', '2:30', 0, 1),
	(3, 1, 1, 'Paris', 'Sevilla', '402', '17/10/2022', '2:30', 0, 1),
	(4, 2, 1, 'Lisbon', 'Amsterdam', '55', '21/10/2022', '1:45', 0, 0),
	(5, 2, 1, 'Amsterdam', 'Lisbon', '55', '22/10/2022', '1:45', 0, 0),
	(6, 3, 1, 'Berlin', 'Mumbai', '250', '23/10/2022', '15:10', 1, 1),
	(7, 3, 1, 'Mumbai', 'Berlin', '250', '24/10/2022', '15:10', 1, 1),
	(8, 3, 1, 'New York', 'Singapore', '405', '25/10/2022', '21:01', 3, 1),
	(9, 3, 1, 'Singapore', 'New York', '405', '26/10/2022', '21:01', 3, 1),
	(10, 1, 1, 'Oslo', 'Rome', '32', '27/10/2022', '2:00', 0, 0),
	(11, 1, 1, 'Rome', 'Oslo', '32', '28/10/2022', '2:00', 0, 0),
	(12, 2, 1, 'Tunis', 'Istanbul', '55', '29/10/2022', '1:45', 0, 1),
	(13, 2, 1, 'Istanbul', 'Tunis', '55', '29/10/2022', '1:45', 0, 1),
	(14, 2, 1, 'Vienna', 'Dublin', '60', '30/10/2022', '3:10', 1, 1),
	(15, 2, 1, 'Dublin', 'Vienna', '60', '31/10/2022', '3:10', 1, 1),
	(16, 3, 1, 'Sydney', 'Toronto', '375', '1/11/2022', '12:20', 2, 1),
	(17, 3, 1, 'Toronto', 'Sydney', '375', '2/11/2022', '12:20', 2, 1),
	(18, 1, 1, 'Belfast', 'Moscow', '88', '3/11/2022', '5:00', 1, 1),
	(19, 1, 1, 'Moscow', 'Belfast', '88', '4/11/2022', '5:00', 1, 1),
	(20, 1, 1, 'Stolkholm', 'Minsk', '77', '6/11/2022', '5:30', 0, 1),
	(21, 1, 1, 'Minsk', 'Stolkholm', '77', '5/11/2022', '5:30', 0, 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
