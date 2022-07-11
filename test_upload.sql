-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 11, 2022 at 10:37 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.3.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_upload`
--

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

CREATE TABLE `files` (
  `id` bigint(20) NOT NULL,
  `ref_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`id`, `ref_id`, `image`, `create_date`) VALUES
(4, '10', 'xxx_202207111513207xu1q.jpg', '2022-07-11 15:13:20'),
(5, '10', 'xxx_20220711151320ife7z.webp', '2022-07-11 15:13:20'),
(6, '10', 'xxx_20220711151320fm9q9.jpeg', '2022-07-11 15:13:20'),
(7, '10', 'xxx_20220711151320dywl8.png', '2022-07-11 15:13:20'),
(8, '10', 'xxx_20220711151320t4jhm.jpg', '2022-07-11 15:13:20'),
(9, '12', 'xxx_20220711153413c0ywf.jpeg', '2022-07-11 15:34:13'),
(10, '12', 'xxx_20220711153413wu2y5.webp', '2022-07-11 15:34:13'),
(11, '12', 'xxx_20220711153413pcq7r.jpeg', '2022-07-11 15:34:13'),
(12, '12', 'xxx_20220711153413wvlx2.jpg', '2022-07-11 15:34:13'),
(13, '12', 'xxx_2022071115341321dj4.png', '2022-07-11 15:34:13'),
(14, '12', 'xxx_202207111534134lu4d.1', '2022-07-11 15:34:13'),
(15, '12', 'xxx_20220711153413l284o.7', '2022-07-11 15:34:13'),
(16, '12', 'xxx_2022071115341376jru.6', '2022-07-11 15:34:13'),
(17, '12', 'xxx_202207111534131bhbj.4', '2022-07-11 15:34:13'),
(18, '12', 'xxx_202207111534139q9co.3', '2022-07-11 15:34:13'),
(19, '12', 'xxx_20220711153413zo9d6.5', '2022-07-11 15:34:13'),
(20, '12', 'xxx_20220711153413tlej0.2', '2022-07-11 15:34:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `files`
--
ALTER TABLE `files`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
