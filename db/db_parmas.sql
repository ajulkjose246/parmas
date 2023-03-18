-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2023 at 04:59 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_parmas`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_administration`
--

CREATE TABLE `tbl_administration` (
  `id` int(11) NOT NULL,
  `usr_name` varchar(30) DEFAULT NULL,
  `usr_position` int(11) DEFAULT NULL,
  `usr_date` varchar(30) DEFAULT NULL,
  `usr_profile` varchar(100) NOT NULL,
  `usr_status` int(11) NOT NULL DEFAULT 0,
  `usr_createOn` timestamp NOT NULL DEFAULT current_timestamp(),
  `usr_updateOn` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_administration`
--

INSERT INTO `tbl_administration` (`id`, `usr_name`, `usr_position`, `usr_date`, `usr_profile`, `usr_status`, `usr_createOn`, `usr_updateOn`) VALUES
(22, 'Fr Joseph Koonanickal', 1, '2021-05-20', 'fr.jpg', 0, '2023-03-02 15:42:00', '2023-03-02 15:42:00'),
(23, 'Tom Pananthanam', 3, '2022-07-20', 'tomsir.jpg', 0, '2023-03-02 15:52:20', '2023-03-02 15:52:20'),
(24, 'Justin Jairaj', 7, '2022-06-16', 'justin.jpg', 0, '2023-03-02 16:01:08', '2023-03-02 16:01:08'),
(25, 'Sajai Saji', 6, '2022-10-27', 'sajai.jpg', 0, '2023-03-02 16:02:47', '2023-03-02 16:02:47');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_administration_position`
--

CREATE TABLE `tbl_administration_position` (
  `pos_id` int(11) NOT NULL,
  `pos_name` varchar(50) NOT NULL,
  `pos_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_administration_position`
--

INSERT INTO `tbl_administration_position` (`pos_id`, `pos_name`, `pos_status`) VALUES
(1, 'Vicar', 1),
(2, 'Assistant Vicar', 0),
(3, 'Chairman', 1),
(4, 'Secretary', 0),
(5, 'Vice Chairman', 0),
(6, 'Joint Secretary', 1),
(7, 'Treasearer', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_announcement`
--

CREATE TABLE `tbl_announcement` (
  `id` int(11) NOT NULL,
  `content` varchar(300) NOT NULL,
  `image` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_announcement`
--

INSERT INTO `tbl_announcement` (`id`, `content`, `image`, `status`) VALUES
(1, 'നാൽപ്പതുമണി ആരാധന\n2022 ഏപ്രിൽ 22, 23, 24 തീയതികളിൽ\n\n', '2022-11-17.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_death_relief_fund`
--

CREATE TABLE `tbl_death_relief_fund` (
  `drf_id` int(11) NOT NULL,
  `drf_name` varchar(200) NOT NULL,
  `drf_houseName` varchar(200) NOT NULL,
  `drf_dob` varchar(200) NOT NULL,
  `drf_ward` varchar(20) NOT NULL,
  `drf_phone` varchar(11) NOT NULL,
  `drf_gender` varchar(10) NOT NULL,
  `drf_address` varchar(300) NOT NULL,
  `drf_currentAddress` varchar(300) NOT NULL,
  `drf_nomineeName` varchar(30) NOT NULL,
  `drf_nomineeDob` varchar(10) NOT NULL,
  `drf_nomineeRelationshp` varchar(30) NOT NULL,
  `drf_minor` varchar(30) NOT NULL,
  `drf_createdOn` timestamp NOT NULL DEFAULT current_timestamp(),
  `drf_updatedOn` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_death_relief_fund`
--

INSERT INTO `tbl_death_relief_fund` (`drf_id`, `drf_name`, `drf_houseName`, `drf_dob`, `drf_ward`, `drf_phone`, `drf_gender`, `drf_address`, `drf_currentAddress`, `drf_nomineeName`, `drf_nomineeDob`, `drf_nomineeRelationshp`, `drf_minor`, `drf_createdOn`, `drf_updatedOn`) VALUES
(1, 'Bibin P Daniel', 'Planthotathil', '2023-03-16', 'Kaa', '9188794758', 'option1', 'Bibin P Daniel', 'Bibin P Daniel', 'Gokul K ', '2023-03-11', 'Friend', ' Ajul K Jose', '2023-03-17 09:02:12', '2023-03-17 09:02:12');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_drf_family_members`
--

CREATE TABLE `tbl_drf_family_members` (
  `drf_member_id` int(11) NOT NULL,
  `drf_id` int(11) NOT NULL,
  `drf_member_name` varchar(50) NOT NULL,
  `drf_member_dob` varchar(20) NOT NULL,
  `drf_member_gender` varchar(20) NOT NULL,
  `drf_member_fam_relation` varchar(50) NOT NULL,
  `drf_member_fam_remarks` varchar(300) NOT NULL,
  `drf_member_onCreate` timestamp NOT NULL DEFAULT current_timestamp(),
  `drf_member_onUpdate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_drf_family_members`
--

INSERT INTO `tbl_drf_family_members` (`drf_member_id`, `drf_id`, `drf_member_name`, `drf_member_dob`, `drf_member_gender`, `drf_member_fam_relation`, `drf_member_fam_remarks`, `drf_member_onCreate`, `drf_member_onUpdate`) VALUES
(1, 1, 'Erick', '2023-03-09', 'option1', 'Friend', 'pottan', '2023-03-17 09:02:12', '2023-03-17 09:02:12'),
(2, 1, 'Alphin', '2023-03-16', 'option1', 'Friend', 'Mandan', '2023-03-17 09:02:12', '2023-03-17 09:02:12');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_family_members`
--

CREATE TABLE `tbl_family_members` (
  `fam_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `fam_name` varchar(50) NOT NULL,
  `fam_dob` varchar(30) NOT NULL,
  `fam_gender` varchar(10) NOT NULL,
  `fam_relationship` varchar(50) NOT NULL,
  `onCreated` timestamp NOT NULL DEFAULT current_timestamp(),
  `onUpdate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_family_members`
--

INSERT INTO `tbl_family_members` (`fam_id`, `user_id`, `fam_name`, `fam_dob`, `fam_gender`, `fam_relationship`, `onCreated`, `onUpdate`) VALUES
(54, 26, 'Amal K Jose', '1995-03-24', 'Male', 'Brother', '2023-03-13 05:51:27', '2023-03-13 05:51:27'),
(55, 26, 'Athul K Jose', '2000-01-28', 'Male', 'Brother', '2023-03-13 05:52:06', '2023-03-13 05:52:06');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_family_unit`
--

CREATE TABLE `tbl_family_unit` (
  `unit_id` int(11) NOT NULL,
  `unit_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_family_unit`
--

INSERT INTO `tbl_family_unit` (`unit_id`, `unit_name`) VALUES
(1, 'St Xavier Family Unit'),
(2, 'St Vincent Family Unit'),
(3, 'St Pius Family Unit'),
(4, 'St Sebastian Family Unit'),
(5, 'St Paul Family Unit'),
(6, 'St Thomas Family Unit'),
(7, 'Mother Teresa Family Unit'),
(8, 'St Teresa Family Unit');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_gallery`
--

CREATE TABLE `tbl_gallery` (
  `img_id` int(11) NOT NULL,
  `img_location` varchar(150) NOT NULL,
  `img_category` varchar(30) NOT NULL,
  `img_status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_gallery`
--

INSERT INTO `tbl_gallery` (`img_id`, `img_location`, `img_category`, `img_status`) VALUES
(3, '2016-08-01.jpg', 'Church', 1),
(4, '2022-11-17 (1).jpg', 'School', 1),
(5, '2022-11-17.jpg', 'Church', 1),
(6, 'IMG_20210819_180754.jpg', 'School', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_kcym`
--

CREATE TABLE `tbl_kcym` (
  `id` int(11) NOT NULL,
  `usr_name` varchar(30) NOT NULL,
  `usr_position` varchar(30) NOT NULL,
  `usr_date` varchar(30) NOT NULL,
  `usr_profile` varchar(100) NOT NULL,
  `usr_status` int(11) NOT NULL DEFAULT 1,
  `usr_createOn` timestamp NOT NULL DEFAULT current_timestamp(),
  `usr_updateOn` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_kcym`
--

INSERT INTO `tbl_kcym` (`id`, `usr_name`, `usr_position`, `usr_date`, `usr_profile`, `usr_status`, `usr_createOn`, `usr_updateOn`) VALUES
(44, 'Dins Jacob', '1', '2023-02-16', 'dins.jpg', 1, '2023-02-21 16:07:47', '2023-02-21 16:07:47'),
(45, 'Anna Pops', '2', '2023-02-16', 'anna_pops.jpg', 1, '2023-02-21 16:15:32', '2023-02-21 16:15:32'),
(46, 'Amal Antoney', '4', '2023-02-16', 'amal.jpg', 1, '2023-02-21 16:21:30', '2023-02-21 16:21:30'),
(47, 'Aleena Ginu', '3', '2023-02-16', 'Aleena.jpg', 1, '2023-02-21 16:24:30', '2023-02-21 16:24:30');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_kcym_position`
--

CREATE TABLE `tbl_kcym_position` (
  `pos_id` int(11) NOT NULL,
  `pos_name` varchar(30) NOT NULL,
  `pos_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_kcym_position`
--

INSERT INTO `tbl_kcym_position` (`pos_id`, `pos_name`, `pos_status`) VALUES
(1, 'President', 1),
(2, 'Vice president', 1),
(3, 'Secretary', 1),
(4, 'Joint secretary', 1),
(5, 'Treasurer', 0),
(6, 'Executive 1', 0),
(7, 'Executive 2', 0),
(8, 'Executive 3', 0),
(9, 'Executive 4', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_login`
--

CREATE TABLE `tbl_login` (
  `log_id` int(11) NOT NULL,
  `usr_id` int(11) NOT NULL,
  `usr_email` varchar(30) NOT NULL,
  `usr_password` varchar(30) NOT NULL,
  `reset_code` varchar(6) DEFAULT NULL,
  `usr_status` int(11) NOT NULL DEFAULT 3,
  `usr_createOn` timestamp NOT NULL DEFAULT current_timestamp(),
  `usr_updateOn` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_login`
--

INSERT INTO `tbl_login` (`log_id`, `usr_id`, `usr_email`, `usr_password`, `reset_code`, `usr_status`, `usr_createOn`, `usr_updateOn`) VALUES
(1, 1, 'admin@gmail.com', 'Admin', NULL, 1, '2023-02-16 16:24:58', '2023-02-25 05:03:41'),
(2, 2, 'amalkjose@gmail.com', 'Amal@2022', NULL, 2, '2023-02-14 13:21:26', '2023-02-25 05:03:45'),
(21, 21, 'alphin2002paul@gmail.com', 'Alphin@2023', NULL, 3, '2023-03-02 17:15:49', '2023-03-02 17:15:49'),
(22, 22, 'bibindaniel10@gmail.com', 'Bibin@2023', NULL, 3, '2023-03-02 17:23:25', '2023-03-02 17:23:25'),
(23, 23, 'dins6221a@gmail.com', 'Dins@2022', NULL, 3, '2023-03-02 17:27:49', '2023-03-02 17:27:49'),
(24, 24, 'erickjames4512@gmail.com', 'Erick@2023', NULL, 3, '2023-03-02 17:29:30', '2023-03-02 17:29:30'),
(25, 25, 'arongeorgejain2025@mca.ajce.in', 'Aron@2023', NULL, 3, '2023-03-02 17:32:24', '2023-03-02 17:32:24'),
(26, 26, 'ajulkjose2025@mca.ajce.in', 'Ajul@2022', NULL, 3, '2023-03-03 03:30:35', '2023-03-14 09:23:58'),
(27, 27, 'sonaannajoseph@gmail.com', 'Sona@2023', NULL, 3, '2023-03-11 12:14:22', '2023-03-11 12:14:22');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_offering`
--

CREATE TABLE `tbl_offering` (
  `offer_id` int(11) NOT NULL,
  `offer_name` varchar(100) NOT NULL,
  `offer_name_mala` varchar(100) NOT NULL,
  `offer_price` int(11) NOT NULL,
  `offer_image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_offering`
--

INSERT INTO `tbl_offering` (`offer_id`, `offer_name`, `offer_name_mala`, `offer_price`, `offer_image`) VALUES
(1, 'SOLEMN HOLY MASS', 'പാട്ടുകുർബാന', 150, 'SOLEMN_HOLY_MASS.webp'),
(2, 'ORDINARY HOLY MASS', 'ഒറ്റ കുർബാന', 100, 'ORDINARY_HOLY_MASS.webp'),
(3, 'HOLY MASS FOR THE EPARTED', 'മരിച്ചവർക്കു വേണ്ടിയുള്ള കുർബാന', 100, 'HOLY_MASS_DEPARTED.webp'),
(4, 'OFFICE OF THE DEPARTED', 'ഒപ്പീസ്', 25, 'departed.webp'),
(5, 'NOVENA', 'നൊവേന', 60, 'NOVENA.webp'),
(6, 'LADEENJU', 'ലദീഞ്ഞ്', 60, 'NOVENA.webp');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_payment`
--

CREATE TABLE `tbl_payment` (
  `id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `payment_status` varchar(50) NOT NULL,
  `payment_id` varchar(50) NOT NULL,
  `payment_date` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  `offer_type` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_payment`
--

INSERT INTO `tbl_payment` (`id`, `amount`, `payment_status`, `payment_id`, `payment_date`, `user_id`, `offer_type`) VALUES
(102, 150, 'Pending', '', '16-3-2023', 26, 1),
(103, 150, 'Success', 'pay_LRkANbTyJznAPJ', '16-3-2023', 26, 1),
(104, 150, 'Success', 'pay_LRkBOcTThnLTP7', '1-4-2023', 26, 1),
(105, 150, 'Success', 'pay_LRkPBEVoYj92T6', '22-3-2023', 27, 1),
(106, 150, 'Pending', '', '17-3-2023', 26, 1),
(107, 150, 'Pending', '', '17-3-2023', 26, 1),
(108, 150, 'Pending', '', '17-3-2023', 26, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_register`
--

CREATE TABLE `tbl_register` (
  `usr_id` int(11) NOT NULL,
  `usr_fname` varchar(30) DEFAULT NULL,
  `usr_sname` varchar(30) DEFAULT NULL,
  `usr_email` varchar(30) DEFAULT NULL,
  `usr_phone` varchar(30) DEFAULT NULL,
  `usr_bapName` varchar(30) DEFAULT NULL,
  `usr_ward` varchar(11) DEFAULT NULL,
  `usr_profile` varchar(100) DEFAULT NULL,
  `usr_houseName` varchar(30) DEFAULT NULL,
  `usr_createdOn` timestamp NOT NULL DEFAULT current_timestamp(),
  `usr_updatedOn` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_register`
--

INSERT INTO `tbl_register` (`usr_id`, `usr_fname`, `usr_sname`, `usr_email`, `usr_phone`, `usr_bapName`, `usr_ward`, `usr_profile`, `usr_houseName`, `usr_createdOn`, `usr_updatedOn`) VALUES
(1, 'Admin', '', '', '', NULL, NULL, '', NULL, '2023-02-16 16:25:55', '2023-03-03 04:07:59'),
(2, 'Amal', 'K Jose', 'amalkjose@gmail.com', '', NULL, NULL, '360_F_553488732_6GhfwBhYFelkhgYykFHXqLY7Rasubfcs.jpg', NULL, '2023-02-16 14:49:58', '2023-02-22 13:40:10'),
(21, 'Alphin', ' Paul Saji', 'alphin2002paul@gmail.com', '9995461423', 'Paul Mathew', '6', 'alphin.jpg', 'Elayidath', '2023-03-02 17:15:49', '2023-03-02 17:19:19'),
(22, 'Bibin', 'P Daniel', 'bibindaniel10@gmail.com', '8129879351', NULL, NULL, NULL, 'Planthottathil', '2023-03-02 17:23:25', '2023-03-02 17:23:25'),
(23, 'Dins', ' Jacob Varghese', 'dins6221a@gmail.com', '8157990867', 'Thomas', '5', 'athul.jpg', 'Kallassariparambil1', '2023-03-02 17:27:49', '2023-03-02 18:07:57'),
(24, 'Erick', 'James', 'erickjames4512@gmail.com', '8592978534', NULL, NULL, NULL, 'Thevalathil', '2023-03-02 17:29:30', '2023-03-02 17:29:30'),
(25, 'Aron', 'George Jain', 'arongeorgejain2025@mca.ajce.in', '7559936759', NULL, NULL, NULL, 'Ayikunnathu', '2023-03-02 17:32:24', '2023-03-02 17:32:24'),
(26, 'Amal', ' K Jose', 'ajulkjose2025@mca.ajce.in', '8078515324', 'Philip', '2', 'SAVE_20211203_213835.jpg', 'Jallara', '2023-03-03 03:30:35', '2023-03-16 13:28:25'),
(27, 'Sona', 'Joseph', 'sonaannajoseph@gmail.com', '9876543212', NULL, NULL, NULL, 'Athikkal', '2023-03-11 12:14:22', '2023-03-11 12:14:22');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_offering`
--

CREATE TABLE `tbl_user_offering` (
  `id` int(11) NOT NULL,
  `usr_id` int(11) NOT NULL,
  `usr_email` varchar(200) NOT NULL,
  `usr_intentions` varchar(500) NOT NULL,
  `offer_id` int(11) NOT NULL,
  `offer_date` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_user_offering`
--

INSERT INTO `tbl_user_offering` (`id`, `usr_id`, `usr_email`, `usr_intentions`, `offer_id`, `offer_date`) VALUES
(3, 26, 'ajulkjose2025@mca.ajce.in', 'Test', 1, '16-3-2023'),
(4, 26, 'ajulkjose2025@mca.ajce.in', 'Test', 1, '1-4-2023'),
(5, 27, 'sonaannajoseph@gmail.com', 'Test', 1, '22-3-2023');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_administration`
--
ALTER TABLE `tbl_administration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_administration_position`
--
ALTER TABLE `tbl_administration_position`
  ADD PRIMARY KEY (`pos_id`);

--
-- Indexes for table `tbl_announcement`
--
ALTER TABLE `tbl_announcement`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_death_relief_fund`
--
ALTER TABLE `tbl_death_relief_fund`
  ADD PRIMARY KEY (`drf_id`);

--
-- Indexes for table `tbl_drf_family_members`
--
ALTER TABLE `tbl_drf_family_members`
  ADD PRIMARY KEY (`drf_member_id`);

--
-- Indexes for table `tbl_family_members`
--
ALTER TABLE `tbl_family_members`
  ADD PRIMARY KEY (`fam_id`);

--
-- Indexes for table `tbl_family_unit`
--
ALTER TABLE `tbl_family_unit`
  ADD PRIMARY KEY (`unit_id`);

--
-- Indexes for table `tbl_gallery`
--
ALTER TABLE `tbl_gallery`
  ADD PRIMARY KEY (`img_id`);

--
-- Indexes for table `tbl_kcym`
--
ALTER TABLE `tbl_kcym`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_kcym_position`
--
ALTER TABLE `tbl_kcym_position`
  ADD PRIMARY KEY (`pos_id`);

--
-- Indexes for table `tbl_login`
--
ALTER TABLE `tbl_login`
  ADD PRIMARY KEY (`log_id`);

--
-- Indexes for table `tbl_offering`
--
ALTER TABLE `tbl_offering`
  ADD PRIMARY KEY (`offer_id`);

--
-- Indexes for table `tbl_payment`
--
ALTER TABLE `tbl_payment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_register`
--
ALTER TABLE `tbl_register`
  ADD PRIMARY KEY (`usr_id`);

--
-- Indexes for table `tbl_user_offering`
--
ALTER TABLE `tbl_user_offering`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_administration`
--
ALTER TABLE `tbl_administration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `tbl_administration_position`
--
ALTER TABLE `tbl_administration_position`
  MODIFY `pos_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `tbl_announcement`
--
ALTER TABLE `tbl_announcement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_death_relief_fund`
--
ALTER TABLE `tbl_death_relief_fund`
  MODIFY `drf_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_drf_family_members`
--
ALTER TABLE `tbl_drf_family_members`
  MODIFY `drf_member_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_family_members`
--
ALTER TABLE `tbl_family_members`
  MODIFY `fam_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `tbl_family_unit`
--
ALTER TABLE `tbl_family_unit`
  MODIFY `unit_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tbl_gallery`
--
ALTER TABLE `tbl_gallery`
  MODIFY `img_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_kcym`
--
ALTER TABLE `tbl_kcym`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `tbl_kcym_position`
--
ALTER TABLE `tbl_kcym_position`
  MODIFY `pos_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbl_login`
--
ALTER TABLE `tbl_login`
  MODIFY `log_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `tbl_offering`
--
ALTER TABLE `tbl_offering`
  MODIFY `offer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_payment`
--
ALTER TABLE `tbl_payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

--
-- AUTO_INCREMENT for table `tbl_register`
--
ALTER TABLE `tbl_register`
  MODIFY `usr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `tbl_user_offering`
--
ALTER TABLE `tbl_user_offering`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
