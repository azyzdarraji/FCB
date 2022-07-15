-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2022 at 07:02 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fcb`
--

-- --------------------------------------------------------

--
-- Table structure for table `adherant`
--

CREATE TABLE `adherant` (
  `ID_ADHERANT` int(11) NOT NULL,
  `NOM` varchar(50) NOT NULL,
  `PRENOM` varchar(50) NOT NULL,
  `AGE` int(11) NOT NULL,
  `POIDS` float NOT NULL,
  `TAILLE` float NOT NULL,
  `NUM_INSCRIPTION` int(11) NOT NULL,
  `DATE_INSCRIPTION` date NOT NULL,
  `ID_CATEGORIE` int(11) NOT NULL,
  `ID_PARENT` int(11) NOT NULL,
  `ID_U` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `adherant`
--

INSERT INTO `adherant` (`ID_ADHERANT`, `NOM`, `PRENOM`, `AGE`, `POIDS`, `TAILLE`, `NUM_INSCRIPTION`, `DATE_INSCRIPTION`, `ID_CATEGORIE`, `ID_PARENT`, `ID_U`) VALUES
(1, 'wel ali', 'ben saleh', 10, 55.35, 157, 123456, '0000-00-00', 1, 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `administrateur`
--

CREATE TABLE `administrateur` (
  `ID_ADMIN` int(11) NOT NULL,
  `NOM` varchar(50) NOT NULL,
  `PRENOM` varchar(50) NOT NULL,
  `NUM_TELEPHONE` int(8) NOT NULL,
  `CIN` int(8) NOT NULL,
  `ID_U` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `categorie`
--

CREATE TABLE `categorie` (
  `ID_CATEGORIE` int(11) NOT NULL,
  `NOM_CATEGORIE` varchar(50) NOT NULL,
  `ID_ENTRAINEUR` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `enchaninement`
--

CREATE TABLE `enchaninement` (
  `ID_ENCHAINEMENT` int(11) NOT NULL,
  `DESCRIPTION` varchar(255) NOT NULL,
  `ID_ENTRAINEUR` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `entraineur`
--

CREATE TABLE `entraineur` (
  `ID_ENTRAINEUR` int(11) NOT NULL,
  `NOM` varchar(50) NOT NULL,
  `PRENOM` varchar(50) NOT NULL,
  `NUM_TELEPHONE` int(8) NOT NULL,
  `CIN` int(8) NOT NULL,
  `ID_U` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `evenement`
--

CREATE TABLE `evenement` (
  `ID_EVENT` int(11) NOT NULL,
  `NOM` varchar(50) NOT NULL,
  `DATE_EVENT` date NOT NULL,
  `TEMPS_DEBUT` time NOT NULL,
  `TEMPS_FIN` time NOT NULL,
  `DESCRIPTION` varchar(50) NOT NULL,
  `ID_TYPE` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `eventhebdo`
--

CREATE TABLE `eventhebdo` (
  `ID_EH` int(11) NOT NULL,
  `ID_VUEH` int(11) NOT NULL,
  `ID_EVENT` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `parent`
--

CREATE TABLE `parent` (
  `ID_PARENT` int(11) NOT NULL,
  `NOM` varchar(50) NOT NULL,
  `PRENOM` varchar(50) NOT NULL,
  `CIN` int(8) NOT NULL,
  `NUM_TELEPHONE` int(8) NOT NULL,
  `ID_U` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `parent`
--

INSERT INTO `parent` (`ID_PARENT`, `NOM`, `PRENOM`, `CIN`, `NUM_TELEPHONE`, `ID_U`) VALUES
(1, 'ali', 'ben saleh', 24851671, 21457845, 3);

-- --------------------------------------------------------

--
-- Table structure for table `payement`
--

CREATE TABLE `payement` (
  `ID_PAYEMENT` int(11) NOT NULL,
  `TYPE_PAYEMENT` varchar(50) NOT NULL,
  `DATE_LIMITE` date NOT NULL,
  `ETAT_PAYEMENT` tinyint(1) NOT NULL DEFAULT 1,
  `MONTANT` float NOT NULL,
  `ID_ADHERANT` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `ID_TRANSACTION` int(11) NOT NULL,
  `ID_PARENT` int(11) NOT NULL,
  `ID_PAYEMENT` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `type_evenement`
--

CREATE TABLE `type_evenement` (
  `ID_TYPE` int(11) NOT NULL,
  `NOM_TYPE` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `ID_U` int(11) NOT NULL,
  `MATRICULE` varchar(50) NOT NULL,
  `MOT_DE_PASSE` varchar(50) NOT NULL,
  `TYPE_U` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `utilisateur`
--

INSERT INTO `utilisateur` (`ID_U`, `MATRICULE`, `MOT_DE_PASSE`, `TYPE_U`) VALUES
(3, 'test2', '$2a$05$dKpK/zrbGM0niI3nXLJbketVy7xS5qMmaNeNN2DGCSX', 'p'),
(4, 'test', '$2a$05$ztrfuWFEU01sHnfopcJuguZSMpjqZ4XIZmS12DStVzX', 'd');

-- --------------------------------------------------------

--
-- Table structure for table `vuehebdomadaire`
--

CREATE TABLE `vuehebdomadaire` (
  `ID_VUEH` int(11) NOT NULL,
  `ANNEE` int(11) NOT NULL,
  `MOINS` int(11) NOT NULL,
  `NOMMOIS` varchar(50) NOT NULL,
  `DEBUT_JOUR` int(11) NOT NULL,
  `ID_VUEC` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `vue_calendrier`
--

CREATE TABLE `vue_calendrier` (
  `ID_VUEC` int(11) NOT NULL,
  `ID_CAT` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adherant`
--
ALTER TABLE `adherant`
  ADD PRIMARY KEY (`ID_ADHERANT`),
  ADD KEY `ID_CATEGORIE` (`ID_CATEGORIE`,`ID_PARENT`,`ID_U`),
  ADD KEY `ID_U` (`ID_U`),
  ADD KEY `ID_PARENT` (`ID_PARENT`);

--
-- Indexes for table `administrateur`
--
ALTER TABLE `administrateur`
  ADD PRIMARY KEY (`ID_ADMIN`),
  ADD KEY `ID_U` (`ID_U`);

--
-- Indexes for table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`ID_CATEGORIE`),
  ADD KEY `ID_ENTRAINEUR` (`ID_ENTRAINEUR`);

--
-- Indexes for table `enchaninement`
--
ALTER TABLE `enchaninement`
  ADD PRIMARY KEY (`ID_ENCHAINEMENT`),
  ADD KEY `ID_ENTRAINEUR` (`ID_ENTRAINEUR`);

--
-- Indexes for table `entraineur`
--
ALTER TABLE `entraineur`
  ADD PRIMARY KEY (`ID_ENTRAINEUR`),
  ADD KEY `ID_U` (`ID_U`);

--
-- Indexes for table `evenement`
--
ALTER TABLE `evenement`
  ADD PRIMARY KEY (`ID_EVENT`),
  ADD KEY `ID_TYPE` (`ID_TYPE`);

--
-- Indexes for table `eventhebdo`
--
ALTER TABLE `eventhebdo`
  ADD PRIMARY KEY (`ID_EH`),
  ADD KEY `ID_VUEH` (`ID_VUEH`,`ID_EVENT`),
  ADD KEY `ID_EVENT` (`ID_EVENT`);

--
-- Indexes for table `parent`
--
ALTER TABLE `parent`
  ADD PRIMARY KEY (`ID_PARENT`),
  ADD KEY `ID_U` (`ID_U`);

--
-- Indexes for table `payement`
--
ALTER TABLE `payement`
  ADD PRIMARY KEY (`ID_PAYEMENT`),
  ADD KEY `ID_ADHERANT` (`ID_ADHERANT`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`ID_TRANSACTION`),
  ADD KEY `ID_PAYEMENT` (`ID_PAYEMENT`),
  ADD KEY `transaction_ibfk_1` (`ID_PARENT`);

--
-- Indexes for table `type_evenement`
--
ALTER TABLE `type_evenement`
  ADD PRIMARY KEY (`ID_TYPE`);

--
-- Indexes for table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`ID_U`);

--
-- Indexes for table `vuehebdomadaire`
--
ALTER TABLE `vuehebdomadaire`
  ADD PRIMARY KEY (`ID_VUEH`),
  ADD KEY `ID_VUEC` (`ID_VUEC`);

--
-- Indexes for table `vue_calendrier`
--
ALTER TABLE `vue_calendrier`
  ADD PRIMARY KEY (`ID_VUEC`),
  ADD KEY `vue_cat` (`ID_CAT`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adherant`
--
ALTER TABLE `adherant`
  MODIFY `ID_ADHERANT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `administrateur`
--
ALTER TABLE `administrateur`
  MODIFY `ID_ADMIN` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `ID_CATEGORIE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `enchaninement`
--
ALTER TABLE `enchaninement`
  MODIFY `ID_ENCHAINEMENT` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `entraineur`
--
ALTER TABLE `entraineur`
  MODIFY `ID_ENTRAINEUR` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `evenement`
--
ALTER TABLE `evenement`
  MODIFY `ID_EVENT` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `eventhebdo`
--
ALTER TABLE `eventhebdo`
  MODIFY `ID_EH` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `parent`
--
ALTER TABLE `parent`
  MODIFY `ID_PARENT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `payement`
--
ALTER TABLE `payement`
  MODIFY `ID_PAYEMENT` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `ID_TRANSACTION` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `type_evenement`
--
ALTER TABLE `type_evenement`
  MODIFY `ID_TYPE` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `ID_U` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `vuehebdomadaire`
--
ALTER TABLE `vuehebdomadaire`
  MODIFY `ID_VUEH` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vue_calendrier`
--
ALTER TABLE `vue_calendrier`
  MODIFY `ID_VUEC` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `adherant`
--
ALTER TABLE `adherant`
  ADD CONSTRAINT `adherant_ibfk_1` FOREIGN KEY (`ID_U`) REFERENCES `utilisateur` (`ID_U`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `adherant_ibfk_2` FOREIGN KEY (`ID_PARENT`) REFERENCES `parent` (`ID_PARENT`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `administrateur`
--
ALTER TABLE `administrateur`
  ADD CONSTRAINT `administrateur_ibfk_1` FOREIGN KEY (`ID_U`) REFERENCES `utilisateur` (`ID_U`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `categorie`
--
ALTER TABLE `categorie`
  ADD CONSTRAINT `categorie_ibfk_1` FOREIGN KEY (`ID_ENTRAINEUR`) REFERENCES `entraineur` (`ID_ENTRAINEUR`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `enchaninement`
--
ALTER TABLE `enchaninement`
  ADD CONSTRAINT `enchaninement_ibfk_1` FOREIGN KEY (`ID_ENTRAINEUR`) REFERENCES `entraineur` (`ID_ENTRAINEUR`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `entraineur`
--
ALTER TABLE `entraineur`
  ADD CONSTRAINT `entraineur_ibfk_1` FOREIGN KEY (`ID_U`) REFERENCES `utilisateur` (`ID_U`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `evenement`
--
ALTER TABLE `evenement`
  ADD CONSTRAINT `evenement_ibfk_1` FOREIGN KEY (`ID_TYPE`) REFERENCES `type_evenement` (`ID_TYPE`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `eventhebdo`
--
ALTER TABLE `eventhebdo`
  ADD CONSTRAINT `eventhebdo_ibfk_1` FOREIGN KEY (`ID_VUEH`) REFERENCES `vuehebdomadaire` (`ID_VUEH`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `eventhebdo_ibfk_2` FOREIGN KEY (`ID_EVENT`) REFERENCES `evenement` (`ID_EVENT`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `parent`
--
ALTER TABLE `parent`
  ADD CONSTRAINT `parent_ibfk_1` FOREIGN KEY (`ID_U`) REFERENCES `utilisateur` (`ID_U`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `payement`
--
ALTER TABLE `payement`
  ADD CONSTRAINT `payement_ibfk_1` FOREIGN KEY (`ID_ADHERANT`) REFERENCES `adherant` (`ID_ADHERANT`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`ID_PARENT`) REFERENCES `parent` (`ID_PARENT`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transaction_ibfk_3` FOREIGN KEY (`ID_PAYEMENT`) REFERENCES `payement` (`ID_PAYEMENT`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `vuehebdomadaire`
--
ALTER TABLE `vuehebdomadaire`
  ADD CONSTRAINT `vuehebdomadaire_ibfk_1` FOREIGN KEY (`ID_VUEC`) REFERENCES `vue_calendrier` (`ID_VUEC`);

--
-- Constraints for table `vue_calendrier`
--
ALTER TABLE `vue_calendrier`
  ADD CONSTRAINT `vue_cat` FOREIGN KEY (`ID_CAT`) REFERENCES `categorie` (`ID_CATEGORIE`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
