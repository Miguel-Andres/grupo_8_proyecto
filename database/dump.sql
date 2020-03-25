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

-- Volcando datos para la tabla baruk_db.avatars: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `avatars` DISABLE KEYS */;
/*!40000 ALTER TABLE `avatars` ENABLE KEYS */;

-- Volcando datos para la tabla baruk_db.clientes: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` (`id`, `nombre`, `apellido`, `email`, `password`, `pais`, `ciudad`, `direccion`, `avatar_id`, `created_at`, `updated_at`) VALUES
	(19, 'tomas', 'tomas', 'tomaspeld@gmail.com', '$2b$04$41V2l4MsYhwfyMtQLNUS7ejZKkAzu9Kn0tuXVT', NULL, NULL, NULL, NULL, '2020-03-03 15:52:03', '2020-03-03 15:52:03'),
	(20, 'tomas ', 'pachu', 'tomaspeld@gmail.com', '$2b$04$/z4zk7rXcrF3WzrqemOlT.BRieF9YMPK2udtjuFg5/cizfr/tokbi', NULL, NULL, NULL, NULL, '2020-03-03 17:42:59', '2020-03-03 17:42:59'),
	(21, 'tomas', 'tomas', 'prueba3@prueba3.com', '$2b$04$vXiDbTjosgGrzPicziX2nOZBn0wv.IEwzuX41dCnD0T5Y1ppuaKGu', NULL, NULL, NULL, NULL, '2020-03-03 18:11:46', '2020-03-03 18:11:46'),
	(22, 'a', 'a', 'a@a.com', '$2b$04$vkFrShy2ca61BrZywVkxReyLowsH3UhVUY7mKeOApbpqiTs5YDoGq', NULL, NULL, NULL, NULL, '2020-03-10 16:46:06', '2020-03-10 16:46:06'),
	(23, 'tomas', 'pel', 'pachu@pachu.com', '$2b$04$O0QdycWquSD4M.nnpVNqCu1vqDe8qfFFtVsTZnkrITkb3d6Mh1h1.', NULL, NULL, NULL, NULL, '2020-03-21 21:45:14', '2020-03-21 21:45:14');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;

-- Volcando datos para la tabla baruk_db.productos: ~18 rows (aproximadamente)
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` (`id`, `nombre`, `categoria`, `precio_individual`, `precio_mediana`, `precio_grande`, `detalle`, `producto`, `imagen`) VALUES
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

-- Volcando datos para la tabla baruk_db.ventas: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
