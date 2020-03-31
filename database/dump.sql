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
  `nombre` varchar(45) DEFAULT NULL,
  `cliente_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_avatars_cliente _idx` (`cliente_id`),
  CONSTRAINT `fk_avatars_cliente ` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla baruk_db.avatars: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `avatars` DISABLE KEYS */;
REPLACE INTO `avatars` (`id`, `nombre`, `cliente_id`) VALUES
	(10, 'MiguelFoto', 45);
/*!40000 ALTER TABLE `avatars` ENABLE KEYS */;

-- Volcando estructura para tabla baruk_db.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `pais` varchar(45) DEFAULT NULL,
  `ciudad` varchar(45) DEFAULT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla baruk_db.clientes: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
REPLACE INTO `clientes` (`id`, `nombre`, `apellido`, `email`, `password`, `pais`, `ciudad`, `direccion`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(39, 'Prueba 1', 'prueba 1', 'a@a.com', '$2b$04$.3j54./oCeM8w9w2QosfOO.pkeAm.czErIDFR6EErgIjnva.u7XV2', NULL, NULL, NULL, '2020-03-26 20:04:40', '2020-03-26 20:04:40', NULL),
	(40, 'prueba 2', 'prueba 2', 'b@b.com', '$2b$04$o03HXdvhDjIWNDQbWFKDleskmpW.xVpNl4Qf4aHbV29OoHrJZ2LTm', NULL, NULL, NULL, '2020-03-26 21:04:06', '2020-03-26 21:04:06', NULL),
	(45, 'rodrigo', 'silva', 'lorenzo@mendoza.com', '$2b$04$hcw5FDcnL0vHsEGqEzYWHuLqBAw/0Ip3V6J3e4h0HZdUTfpkGb/ny', 'venezuela', 'barquisimeto', 'albariño', '2020-03-28 04:47:27', '2020-03-29 18:05:52', NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla baruk_db.productos: ~19 rows (aproximadamente)
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
	(38, 'Palmitos', 'clasica ', 0, 0, 600, 'salsa de tomate, muzzarella, palmitos y jamon cocido', 'pizza', 'https://i.ibb.co/3z0KDFg/palmitos-Fi.jpg'),
	(39, 'Anchoas', 'clasica ', 350, 450, 600, 'salsa de tomate y anchoas', 'pizza', 'https://i.ibb.co/6Y2p114/anchoas.jpg'),
	(40, 'Higos, Jamon Crudo y Brie', 'especial', 350, 450, 600, 'salsa de tomate, muzzarella, jamon crudo, higos y queso brie', 'pizza', 'https://i.ibb.co/WfSry4x/higos-crudo-brie.jpg'),
	(41, 'Anana y Jamon ', 'clasica', 350, 450, 600, 'salsa de tomate, muzzarella, jamon cocido y anana ', 'pizza', 'https://i.ibb.co/mGX759f/ananaF.jpg'),
	(42, 'Canchera', 'clasica', 200, 300, 500, 'Salsa de tomate ', 'pizza', 'https://i.ibb.co/B6JwcCm/canchera-F.jpg'),
	(65, 'Coliflor', 'especial', 300, 400, 600, 'Salsa de tomate, muzzarella y coliflor', 'pizza', '');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;

-- Volcando estructura para tabla baruk_db.tokens
CREATE TABLE IF NOT EXISTS `tokens` (
  `id` int(200) NOT NULL AUTO_INCREMENT,
  `cliente_id` int(200) NOT NULL,
  `token` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tokens_clientes` (`cliente_id`),
  CONSTRAINT `fk_tokens_clientes` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COMMENT='token para cookies';

-- Volcando datos para la tabla baruk_db.tokens: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
REPLACE INTO `tokens` (`id`, `cliente_id`, `token`) VALUES
	(1, 45, '2003-06-01');
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;

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
