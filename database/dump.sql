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

-- Volcando estructura para tabla baruk_db.avatars
CREATE TABLE IF NOT EXISTS `avatars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `cliente_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_avatars_cliente _idx` (`cliente_id`),
  CONSTRAINT `fk_avatars_cliente ` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;

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
  `pais` varchar(45) DEFAULT NULL,
  `ciudad` varchar(45) DEFAULT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  `imagen` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla baruk_db.clientes: ~7 rows (aproximadamente)
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` (`id`, `nombre`, `apellido`, `email`, `password`, `pais`, `ciudad`, `direccion`, `created_at`, `updated_at`, `deleted_at`, `imagen`) VALUES
	(39, 'Prueba 1', 'prueba 1', 'a@a.com', '$2b$04$.3j54./oCeM8w9w2QosfOO.pkeAm.czErIDFR6EErgIjnva.u7XV2', NULL, NULL, NULL, '2020-03-26 20:04:40', '2020-03-26 20:04:40', NULL, NULL),
	(40, 'prueba 2', 'prueba 2', 'b@b.com', '$2b$04$o03HXdvhDjIWNDQbWFKDleskmpW.xVpNl4Qf4aHbV29OoHrJZ2LTm', NULL, NULL, NULL, '2020-03-26 21:04:06', '2020-03-26 21:04:06', NULL, NULL),
	(46, 'miguel', 'miguel', 'fa@fa.com', '$2b$04$UMENNlfZYavVo9rxtv4cfOT1DQf0svyfO3eXCFXVSOfU8BZJkAAu.', NULL, NULL, NULL, '2020-04-01 18:15:53', '2020-04-01 18:15:53', NULL, NULL),
	(47, 'pepito', 'lopez', 'rompe@rompe.com', '$2b$04$yCQf3pBbpovoZql6sz.8fupHA.nPJPRCm.IA9r9HiHQUT8FBxvvJu', NULL, NULL, NULL, '2020-04-01 18:16:50', '2020-04-01 18:16:50', NULL, NULL),
	(49, 'maria fernanda', 'villavicencio ', 'maria@fernanda.com', '$2b$04$w69zFtDtB4NJul9xtzR/oOnspxEyRCWCfyRd2RRb2nLRsBvfkvAQu', NULL, NULL, NULL, '2020-04-02 14:06:28', '2020-04-02 14:07:48', NULL, 'maria fernanda-1585847268329.jpg'),
	(50, 'miguel ', 'silva', 'eze@eze.com', '$2b$04$MERWqqQX.P/g5603ioYbCe7bxkCIX4OfJ8hzPRhEukoZJwTGY.0bK', NULL, NULL, NULL, '2020-04-02 17:17:01', '2020-04-02 17:17:58', NULL, 'miguel -1585858678228.jpg'),
	(51, 'miguel', 'silva', 'lorenzo@mendoza.com', '$2b$04$WYwT.gxZt5bsac8tbdrI6eD7miCaGWaq9Y9MQS2aJYcSRoERrjooW', NULL, NULL, NULL, '2020-04-08 17:57:08', '2020-05-15 01:53:58', NULL, 'miguel-1589518438431.jpg');
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
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla baruk_db.productos: ~17 rows (aproximadamente)
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` (`id`, `nombre`, `categoria`, `precio_individual`, `precio_mediana`, `precio_grande`, `detalle`, `producto`, `imagen`) VALUES
	(1, 'Muzzarela', 'clasica', 281, 400, 500, 'la mejor pizza de muzzarellapizza', '', 'Muzzarela-1585846682114.JPG'),
	(2, 'Fugazzeta', 'clasica', 282, 400, 500, 'Salsa de tomate, muzzarella, cebolla', 'pizza', 'Fugazzeta-1585846756161.JPG'),
	(3, 'Napolitana', 'clasica', 283, 400, 500, 'Salsa de tomate, muzzarella, tomate, ajo y oregano', 'pizza', 'Napolitana-1585846775218.jpg'),
	(4, 'Jamon', 'clasica', 284, 400, 500, 'Salsa de tomate, muzzarella, jamón y oregano', 'pizza', 'Jamon-1585846814763.JPG'),
	(5, 'Peperoni', 'clasica', 285, 400, 500, 'Salsa de tomate, muzzarella y peperoni', 'pizza', 'Peperoni-1585847808065.JPG'),
	(6, 'Jamon y Morron', 'clasica', 286, 400, 500, 'Salsa de tomate, muzzarella, jamón y morrones asados', 'pizza', 'Jamon y Morron-1585846950974.JPG'),
	(7, 'Provolone', 'clasica', 287, 400, 500, 'Salsa de tomate, provolone y muzzarella', 'pizza', 'Provolone-1585846896278.JPG'),
	(8, 'cheddar y panceta', 'clasica', 288, 400, 500, 'Salsa de tomate, muzzarella, Cheddar y panceta', 'pizza', 'cheddar y panceta-1585846926964.jpg'),
	(9, 'pollo y barbacoa', 'especial', 400, 500, 600, 'Salsa de tomate, muzzarella, pollo y barbacoa', 'pizza', 'pollo y barbacoa-1585847827955.JPG'),
	(10, 'champigñon', 'especial', 401, 500, 600, 'Salsa de tomate, muzzarella, champigñon y puerro', 'pizza', 'champigñon-1585847845169.JPG'),
	(11, 'espinaca y salsa blanca', 'especial', 402, 500, 600, 'Salsa de tomate, espinacha, salsa bechamel y muzzarella', 'pizza', 'espinaca y salsa blanca-1585847863514.jpeg'),
	(12, 'cebolla caramelizada', 'especial', 403, 500, 600, 'Salsa de tomate, muzzarella, cebolla caramelizada y vino tinto', 'pizza', 'cebolla caramelizada-1585847880765.JPG'),
	(38, 'Palmitos', 'clasica ', 0, 0, 600, 'salsa de tomate, muzzarella, palmitos y jamon cocido', 'pizza', 'Palmitos-1585846730541.jpg'),
	(39, 'Anchoas', 'clasica ', 350, 450, 600, 'salsa de tomate y anchoas', 'pizza', 'Anchoas-1585846979659.jpg'),
	(40, 'Higos, Jamon Crudo y Brie', 'especial', 350, 450, 600, 'salsa de tomate, muzzarella, jamon crudo, higos y queso brie', 'pizza', 'Higos, Jamon Crudo y Brie-1585847901479.jpg'),
	(41, 'Anana y Jamon ', 'clasica', 350, 450, 600, 'salsa de tomate, muzzarella, jamon cocido y anana ', 'pizza', 'Anana y Jamon -1585846852049.jpg'),
	(42, 'Canchera', 'clasica', 200, 300, 500, 'Salsa de tomate ', 'pizza', 'Canchera-1585847922984.jpg');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;

-- Volcando estructura para tabla baruk_db.tokens
CREATE TABLE IF NOT EXISTS `tokens` (
  `id` int(200) NOT NULL AUTO_INCREMENT,
  `cliente_id` int(200) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tokens_clientes` (`cliente_id`),
  CONSTRAINT `fk_tokens_clientes` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8mb4 COMMENT='token para cookies';

-- Volcando datos para la tabla baruk_db.tokens: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
INSERT INTO `tokens` (`id`, `cliente_id`, `token`) VALUES
	(12, 47, 'jhdfshdfjkalskskkssk'),
	(123, 51, 'hotmail');
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
