CREATE TABLE `categorias` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);


--
-- Table structure for table `facturas`
--


CREATE TABLE `facturas` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Numero` decimal(8,2) NOT NULL,
  `Total` decimal(8,2) NOT NULL,
  `Fecha` datetime NOT NULL,
  `id_usuario` bigint(20) NOT NULL,
  `id_tipo` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
);


--
-- Table structure for table `marcas`
--


CREATE TABLE `marcas` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `Origen` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

--
-- Table structure for table `productos`
--


CREATE TABLE `productos` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Cilindrada` decimal(8,2) NOT NULL,
  `Modelo` varchar(255) NOT NULL,
  `Estilo` varchar(255) NOT NULL,
  `Precio` decimal(8,2) NOT NULL,
  `Imagen` varchar(255) NOT NULL DEFAULT 'img',
  `Stock` tinyint(4) NOT NULL,
  `Descripcion` text NOT NULL,
  `Color` varchar(255) NOT NULL,
  `Marca` varchar(255) NOT NULL,
  `id_marcas` bigint(20) NOT NULL,
  `id_categoria` bigint(20) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);


INSERT INTO `productos` VALUES (1,150.00,'FZX','0',140000.00,'2023_YC150_MDPBM1_IND_01 YAMAHA FZX BLU 360 00003.jpg',0,'fzx','azul','Yamaha',0,0,NULL,NULL,'2023-11-29 21:12:29'),(2,300.00,'MT03','0',120000.00,'2022_MTN320_PGD_EUR_360_021_03.jpeg',0,'2022','negro','Yamaha',0,0,NULL,NULL,'2023-11-29 21:13:14'),(3,900.00,'MT09','0',170000.00,'img',0,'','0','Yamaha',0,0,NULL,NULL,NULL),(4,125.00,'NMAX','0',110000.00,'img',0,'','0','Yamaha',0,0,NULL,NULL,NULL),(5,130.00,'MT09','',140000.00,'2020_RAYZR_SMX_IND_03.png',0,'wweee','azul','Yamaha',0,0,NULL,NULL,NULL),(6,0.00,'','',0.00,'img',0,'','','',0,0,'2023-11-14 17:12:03',NULL,NULL),(7,0.00,'','',0.00,'img',0,'','','',0,0,NULL,NULL,NULL),(8,0.00,'','',0.00,'img',0,'','','',0,0,NULL,NULL,NULL),(9,677.00,'RAY-ZR x','',999999.99,'2020_RAYZR_SMX_IND_01.png',0,'Quisque nec accumsan eros','','Yamaha',0,0,NULL,NULL,NULL),(10,222.00,'www','',999999.99,'2020_RAYZR_SMX_IND_03.png',0,'eweq','negro','Yamaha',0,0,NULL,NULL,NULL),(11,290.00,'RAY-ZR SMX','',180000.00,'2020_RAYZR_SMX_IND.jpg',0,'2020','negro','Yamaha',0,0,NULL,'2023-11-29 20:46:16','2023-11-29 21:06:41');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos_facturas`
--


CREATE TABLE `productos_facturas` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `id_productos` bigint(20) NOT NULL,
  `id_facturas` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
);

--
-- Table structure for table `roles`
--


CREATE TABLE `roles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Cliente` bigint(20) NOT NULL,
  `Administrador` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
);


--
-- Table structure for table `tipos`
--


CREATE TABLE `tipos` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);


--
-- Table structure for table `usuarios`
--


CREATE TABLE `usuarios` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Apellido` varchar(255) NOT NULL,
  `Fecha de nacimiento` date NOT NULL,
  `E-Mail` varchar(255) NOT NULL,
  `Clave` varchar(255) DEFAULT NULL,
  `Foto` varchar(255) NOT NULL,
  `DNI` decimal(8,2) NOT NULL,
  `Telefono` decimal(8,2) NOT NULL,
  `Direccion` varchar(255) NOT NULL,
  `id_roles` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) 