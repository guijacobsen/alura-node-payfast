-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 29, 2019 at 06:02 PM
-- Server version: 5.7.25-0ubuntu0.18.04.2
-- PHP Version: 7.2.10-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `payfast`
--

-- --------------------------------------------------------

--
-- Table structure for table `pagamentos`
--

CREATE TABLE `pagamentos` (
  `id` int(11) NOT NULL,
  `forma_de_pagamento` varchar(255) NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `moeda` varchar(3) NOT NULL,
  `status` varchar(255) NOT NULL,
  `data` date DEFAULT NULL,
  `descricao` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pagamentos`
--

INSERT INTO `pagamentos` (`id`, `forma_de_pagamento`, `valor`, `moeda`, `status`, `data`, `descricao`) VALUES
(1, 'payfast', '10.98', 'BRL', 'CRIADO', '2019-01-21', 'Pagando com Payfast'),
(2, 'payfast', '10.98', 'BRL', 'CRIADO', '2019-01-21', 'Pagando com Payfast'),
(3, 'payfast', '10.98', 'BRL', 'CANCELADO', '2019-01-21', 'Pagando com Payfast'),
(4, 'payfast', '10.98', 'BRL', 'CRIADO', '2019-01-21', 'Pagando com Payfast'),
(5, 'payfast', '10.98', 'BRL', 'CANCELADO', '2019-01-21', 'Pagando com Payfast'),
(6, 'payfast', '10.98', 'BRL', 'CRIADO', '2019-01-21', 'Pagando com Payfast'),
(7, 'payfast', '10.98', 'BRL', 'CRIADO', '2019-01-21', 'Pagando com Payfast'),
(8, 'payfast', '10.98', 'USD', 'CRIADO', '2019-01-21', 'Pagando com Payfast'),
(9, 'payfast', '10.98', 'USD', 'CRIADO', '2019-01-21', 'Pagando com Payfast'),
(10, 'payfast', '10.98', 'USD', 'CRIADO', '2019-01-21', 'Pagando com Payfast'),
(11, 'payfast', '10.98', 'USD', 'CANCELADO', '2019-01-21', 'Pagando com Payfast'),
(12, 'payfast', '10.98', 'USD', 'CRIADO', '2019-01-21', 'Pagando com Payfast'),
(13, 'payfast', '10.98', 'USD', 'CONFIRMADO', '2019-01-21', 'Pagando com Payfast'),
(14, 'paypal', '100.76', 'USD', 'CONFIRMADO', '2019-01-22', 'Pagando com PayPal'),
(15, 'payfast', '20.89', 'BRL', 'CRIADO', '2019-01-22', 'Pagando com Payfast'),
(16, 'payfast', '20.89', 'BRL', 'CONFIRMADO', '2019-01-22', 'Pagando com Payfast'),
(17, 'payfast', '10.98', 'USD', 'CRIADO', '2019-01-28', 'Pagando com Payfast'),
(18, 'payfast', '10.98', 'USD', 'CRIADO', '2019-01-28', 'Pagando com Payfast'),
(19, 'payfast', '10.98', 'USD', 'CRIADO', '2019-01-28', 'Pagando com Payfast'),
(20, 'cartao', '10.98', 'USD', 'CRIADO', '2019-01-28', 'Pagando com Payfast'),
(21, 'cartao', '10.98', 'USD', 'CRIADO', '2019-01-28', 'Pagando com Payfast');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pagamentos`
--
ALTER TABLE `pagamentos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pagamentos`
--
ALTER TABLE `pagamentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
