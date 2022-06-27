-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 13-Abr-2021 às 18:27
-- Versão do servidor: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `galeria`
--
CREATE DATABASE IF NOT EXISTS `galeria` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `galeria`;
-- --------------------------------------------------------

--
-- Estrutura da tabela `fotos`
--

CREATE TABLE `fotos` (
  `id` int(11) NOT NULL,
  `legenda` text NOT NULL,
  `nome` text NOT NULL,
  `data` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `fotos`
--

INSERT INTO `fotos` (`id`, `legenda`, `nome`, `data`) VALUES
(27, 'Legenda alterada!!!', '8e0f67ca0bf965a7b53fcd32c9d61a25.jpg', '2021-03-29'),
(29, 'Teste!.....', 'bf36023bf272581fe200c569ca5c2413.jpg', '2021-03-29'),
(31, 'Que coisa interessante!', '4b7f26916bb7592a2a94e4b142848c2d.jpg', '2021-03-30'),
(33, 'Esta tudo certo!', '8f77f2062b992a463b0b62f5c88cc975.jpg', '2021-03-30'),
(36, 'Onde estas', 'bef4ac8ae972176b34d21a15063bd452.jpg', '2021-03-30'),
(37, 'ola....!', '6649f8e3742e5676a24db6639af17061.jpg', '2021-03-31'),
(38, 'Urla', '204e6ea6af6f3f1be78cfc92e403599b.jpg', '2021-04-01'),
(40, 'Ola !!!!!!!!', '44e18263c272e0d51fb1d23cdb86a5da.jpg', '2021-04-01'),
(42, 'Alguma legenda qualquer', '3739ab8be9e7846b66b072dc76320cf2.jpg', '2021-04-01'),
(43, 'Nama', '54873e5032f50dcf25a043e683ac29b1.jpg', '2021-04-01'),
(45, 'ola', 'a280ebaca3acff716eb2f33bb4f0fc68.jpg', '2021-04-01'),
(46, 'Ola Mundo', '71d6957ada0b96b75be9326638fe07c1.jpg', '2021-04-11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fotos`
--
ALTER TABLE `fotos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fotos`
--
ALTER TABLE `fotos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
