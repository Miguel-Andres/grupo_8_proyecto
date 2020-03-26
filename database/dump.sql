-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.11-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.3.0.5771
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para baruk_db
CREATE DATABASE IF NOT EXISTS `baruk_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `baruk_db`;

-- Volcando estructura para tabla baruk_db.avatars
CREATE TABLE IF NOT EXISTS `avatars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla baruk_db.avatars: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `avatars` DISABLE KEYS */;
/*!40000 ALTER TABLE `avatars` ENABLE KEYS */;

-- Volcando estructura para tabla baruk_db.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) DEFAULT NULL,
  `apellido` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `pais` varchar(200) DEFAULT NULL,
  `ciudad` varchar(200) DEFAULT NULL,
  `direccion` varchar(200) DEFAULT NULL,
  `avatar_id` varchar(200) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla baruk_db.clientes: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
REPLACE INTO `clientes` (`id`, `nombre`, `apellido`, `email`, `password`, `pais`, `ciudad`, `direccion`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(19, 'tes1 ', 'test1', 'ramon@ramon.com', '$2b$04$NTidWm1OTYNbdv1AEwdwW.8GNkurVzzqZbE.md', NULL, NULL, NULL, '2020-03-02 01:27:04', '2020-03-02 01:27:04', NULL),
	(20, 'tomas', 'tomas', 'tomas@tomas.com', '12345', NULL, NULL, NULL, '2020-03-02 06:13:09', '2020-03-02 06:13:09', NULL),
	(21, 'test1', 'test1', 'test1@test1.com', '$2b$04$DUcezzDzPnowZ8DBHH0T3.Bc.qcyZFkJNtqx7s', NULL, NULL, NULL, '2020-03-02 20:49:56', '2020-03-02 20:49:56', NULL),
	(22, 'prueba', 'prueba', 'prueba@prueba.com', '$2b$04$XtDrVDusMirL.eikcR8qxO9P4xGg33YtH1zGYC', NULL, NULL, NULL, '2020-03-03 02:32:41', '2020-03-03 02:32:41', NULL),
	(23, 'prueba 45', 'prueba 45', 'prueba@ididjd.com', '$2b$04$P4gmYu9rDUmYciMT/Qmm2.scAhXEM./H/W8x7Z', NULL, NULL, NULL, '2020-03-03 06:33:48', '2020-03-03 06:33:48', NULL),
	(24, 'test1', 'test1', 'test1@test1.com', '$2b$04$Ku3iq3DRJqmZK69skCFkuuHii8mtDM9JA5ipWE', NULL, NULL, NULL, '2020-03-03 06:27:32', '2020-03-03 06:27:32', NULL),
	(25, 'test3', 'test3', 'tes3@hchchc.com', '$2b$04$wbQ8CcvuZxIr4RwaVx6KMuH3bsp.YOjy6XeaSX', NULL, NULL, NULL, '2020-03-03 06:28:22', '2020-03-03 06:28:22', NULL),
	(26, 'test4 ', 'test4', 'test4@test4.com', '$2b$04$tb4Z7msiORXXkyU9ojAnreTywqiHIB5xvX2k1U', NULL, NULL, NULL, '2020-03-03 06:36:49', '2020-03-03 06:36:49', NULL),
	(27, 'ale', 'test', 'a@a.com', '$2b$04$.DQ3S9DAhfHprlK9VIdBZOFelVe1cV9kqHXW4c', NULL, NULL, NULL, '2020-03-03 06:38:56', '2020-03-03 06:38:56', NULL),
	(28, 'ale', 'ale', 'b@b.com', '$2b$04$oBH7QY82swP7i59PBTjLSeUXT21ZsgzpZbOvRQyXxpiicfLMO1l2.', NULL, NULL, NULL, '2020-03-03 06:45:19', '2020-03-03 06:45:19', NULL),
	(29, 'miguel', 'miguel', 'prueba3@prueba3.com', '$2b$04$fSNKO8xLl5IOrSPRmCrQwe5NuwFhFN5f9TV5jhf1NxP2RwbpDPId2', NULL, NULL, NULL, '2020-03-03 06:57:52', '2020-03-03 06:57:52', NULL),
	(30, 'miguel andres', 'silva pereira', 'miguel@miguel.com', '$2b$04$kppsruFo62cZolWZe973w.AeVwOISZvsFk.awV5WF7hPr6r8Z0EA2', NULL, NULL, NULL, '2020-03-05 04:17:14', '2020-03-05 04:17:14', NULL),
	(31, 'pedro andres', 'silva', 'a@a.com', '$2b$04$pDXjXUBL5fr9OwcwKzrTMOOjYaaGonC22CZEf6QKmAwVd9L4QSrM2', NULL, NULL, NULL, '2020-03-05 11:30:54', '2020-03-05 11:30:54', NULL),
	(32, 'hola soy el nuevo usuario', 'hola', 'xyz@xyz.com', '$2b$04$.dUsKmhHu8qQn288EstsRuUZguW3Vr8alLO.Uq4YEAFaWS3Ny98zK', NULL, NULL, NULL, '2020-03-05 11:31:53', '2020-03-05 11:31:53', NULL),
	(33, 'lorenzo', 'mendoza  fff', 'lorenzo@mendoza.com', '$2b$04$7UbevI3PgArE2m5tE0Dwq.P4ZZL30PUFYEHUdvFrqwt3NtOqPNS.m', 'argentina', 'buenos aires', 'inglatteta', '2020-03-05 11:36:45', '2020-03-25 03:12:21', NULL),
	(34, 'pedro perez', 'juan', 'pedro@pedro.com', '$2b$04$w/dDJ7s9j00VrfcbTaqJfOFStnmiUP96o9IiS6tV1e8GV7nl.lWBu', NULL, NULL, NULL, '2020-03-05 11:17:53', '2020-03-05 11:17:53', NULL),
	(35, 'ale', 'ale', 'ale@gmail.com', '$2b$04$TywpTUJz33.H.aeO/WZnXul5jiyi.SUwfKHaVLSd3LScEV8dNc/Wi', 'barcelona', 'barcelona', 'barcelona', '2020-03-05 11:20:35', '2020-03-05 11:49:22', NULL),
	(36, 'kdjdj', 'kskfj', 'kk@jjsks.com', '$2b$04$0F26pebEM3ue2Dq0TTUvjOjRMSua44t1pNCMNKxptPE4LN4Ojzc06', NULL, NULL, NULL, '2020-03-10 18:29:48', '2020-03-10 18:29:48', NULL);
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;

-- Volcando estructura para tabla baruk_db.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `categoria` varchar(200) NOT NULL,
  `precio_individual` int(11) NOT NULL,
  `precio_mediana` int(11) NOT NULL,
  `precio_grande` int(11) NOT NULL,
  `detalle` longtext NOT NULL,
  `producto` varchar(200) NOT NULL,
  `imagen` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla baruk_db.productos: ~18 rows (aproximadamente)
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
REPLACE INTO `productos` (`id`, `nombre`, `categoria`, `precio_individual`, `precio_mediana`, `precio_grande`, `detalle`, `producto`, `imagen`) VALUES
	(1, 'Muzzarela', 'clasica', 281, 400, 500, 'Salsa de tomate, muzzarella y oregano', 'pizza', 'https://i.ibb.co/mHfn32y/muzzarella.jpg'),
	(2, 'Fugazzeta', 'clasica', 282, 400, 500, 'Salsa de tomate, muzzarella, cebolla', 'pizza', 'https://i.ibb.co/WFxDTky/cebolla.jpg'),
	(3, 'Napolitana', 'clasica', 283, 400, 500, 'Salsa de tomate, muzzarella, tomate, ajo y oregano', 'pizza', 'https://i.ibb.co/FHf1MgN/napo.jpg'),
	(4, 'Jamon', 'clasica', 284, 400, 500, 'Salsa de tomate, muzzarella, jamón y oregano', 'pizza', 'https://i.ibb.co/hLkDyBy/jamon.jpg'),
	(5, 'Peperoni', 'clasica', 285, 400, 500, 'Salsa de tomate, muzzarella y peperoni', 'pizza', 'https://i.ibb.co/W3w1Mtr/Peperoni.jpg'),
	(6, 'Jamon y Morron', 'clasica', 286, 400, 500, 'Salsa de tomate, muzzarella, jamón y morrones asados', 'pizza', 'https://i.ibb.co/g7ScW5Z/jamon-y-morrones.jpg'),
	(7, 'Provolone', 'clasica', 287, 400, 500, 'Salsa de tomate, provolone y muzzarella', 'pizza', 'https://i.ibb.co/zFKJmrh/Provolone.jpg'),
	(8, 'cheddar y panceta', 'clasica', 288, 400, 500, 'Salsa de tomate, muzzarella, Cheddar y panceta', 'pizza', 'https://i.ibb.co/X4pBsYg/Cheddar.jpg'),
	(9, 'pollo y barbacoa', 'especial', 400, 500, 600, 'Salsa de tomate, muzzarella, pollo y barbacoa', 'pizza', 'https://i.ibb.co/jy8Jpxz/pollo-y-bbq.jpg'),
	(10, 'champigñon', 'especial', 401, 500, 600, 'Salsa de tomate, muzzarella, champigñon y puerro', 'pizza', 'https://i.ibb.co/1nGv6Tg/champig-on.jpg'),
	(11, 'espinaca y salsa blanca', 'especial', 402, 500, 600, 'Salsa de tomate, espinacha, salsa bechamel y muzzarella', 'pizza', 'https://i.ibb.co/HCn4x8N/P-espinaca.jpg'),
	(12, 'cebolla caramelizada', 'especial', 403, 500, 600, 'Salsa de tomate, muzzarella, cebolla caramelizada y vino tinto', 'pizza', 'https://i.ibb.co/ZBYPRt2/cebollaC.jpg'),
	(32, 'Miguel', 'piza ', 234, 234, 123, '', 'clasiscas', ''),
	(33, 'pizita', 'clasiscas', 233, 23334, 123444, 'la mejor pizza de todas', 'original', ''),
	(34, 'jamon ', 'pizza', 100, 150, 300, 'Prueba vistas', 'pixxa', ''),
	(38, 'Palmitos', 'clasica ', 0, 0, 600, 'salsa de tomate, muzzarella, palmitos y jamon cocido', 'pizza', 'https://i.ibb.co/3z0KDFg/palmitos-Fi.jpg'),
	(39, 'Anchoas', 'clasica ', 350, 450, 600, 'salsa de tomate y anchoas', 'pizza', 'https://i.ibb.co/6Y2p114/anchoas.jpg'),
	(40, 'Higos, Jamon Crudo y Brie', 'especial', 350, 450, 600, 'salsa de tomate, muzzarella, jamon crudo, higos y queso brie', 'pizza', 'https://i.ibb.co/WfSry4x/higos-crudo-brie.jpg'),
	(41, 'Anana y Jamon ', 'clasica', 350, 450, 600, 'salsa de tomate, muzzarella, jamon cocido y anana ', 'pizza', 'https://i.ibb.co/mGX759f/ananaF.jpg'),
	(42, 'Canchera', 'clasica', 200, 300, 500, 'Salsa de tomate ', 'pizza', 'https://i.ibb.co/B6JwcCm/canchera-F.jpg'),
	(65, 'Coliflor', 'especial', 300, 400, 600, 'Salsa de tomate, muzzarella y coliflor', 'pizza', '');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;

-- Volcando estructura para tabla baruk_db.token
CREATE TABLE IF NOT EXISTS `token` (
  `id` int(11) NOT NULL,
  `id_cliente` int(11) DEFAULT NULL,
  `token` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='token para cookies';

-- Volcando datos para la tabla baruk_db.token: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
/*!40000 ALTER TABLE `token` ENABLE KEYS */;

-- Volcando estructura para tabla baruk_db.ventas
CREATE TABLE IF NOT EXISTS `ventas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `producto_id` int(11) DEFAULT NULL,
  `cliente_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla baruk_db.ventas: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
