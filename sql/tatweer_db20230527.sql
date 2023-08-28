-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tatweer_db
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(45) DEFAULT NULL,
  `category_icon` varchar(45) DEFAULT NULL,
  `category_created_at` datetime DEFAULT NULL,
  `category_updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'home_app',NULL,'2023-05-05 00:00:00','2023-05-05 00:00:00');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client` (
  `client_id` int NOT NULL AUTO_INCREMENT,
  `country_id` int DEFAULT NULL,
  `client_first_name` varchar(16) NOT NULL,
  `client_last_name` varchar(20) NOT NULL,
  `client_username` varchar(45) DEFAULT NULL,
  `client_email` varchar(45) NOT NULL,
  `client_mobile` varchar(15) DEFAULT NULL,
  `client_password` varchar(45) DEFAULT NULL,
  `client_address` varchar(45) DEFAULT NULL,
  `client_gender` tinyint(1) DEFAULT NULL,
  `client_dob` datetime DEFAULT NULL,
  `client_photo` varchar(45) DEFAULT NULL,
  `client_verified_at` datetime DEFAULT NULL,
  `role` enum('user','admin','superuser') DEFAULT NULL,
  PRIMARY KEY (`client_id`),
  KEY `client_country__country_id_idx` (`country_id`),
  CONSTRAINT `client_country__country_id` FOREIGN KEY (`country_id`) REFERENCES `country` (`country_id`) ON DELETE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (2,1,'John','Claim','1','john@claim.com','123','1','',1,'2000-10-10 00:00:00',NULL,NULL,'admin'),(3,3,'John3','Claim','2','john@claim.com','123','2','',1,'2000-10-10 00:00:00',NULL,NULL,'user'),(7,NULL,'1','2',NULL,'1@2.com','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(8,NULL,'1','2',NULL,'1@2.com','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(9,NULL,'3','3',NULL,'3@3.com','333',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(10,NULL,'3','3',NULL,'3@3.com','333',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(11,NULL,'3','3',NULL,'3@3.com','333',NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_order`
--

DROP TABLE IF EXISTS `client_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client_order` (
  `client_order_id` int NOT NULL AUTO_INCREMENT,
  `client_id` int NOT NULL,
  `product_id` int DEFAULT NULL,
  PRIMARY KEY (`client_order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_order`
--

LOCK TABLES `client_order` WRITE;
/*!40000 ALTER TABLE `client_order` DISABLE KEYS */;
INSERT INTO `client_order` VALUES (1,1,1),(2,1,2),(3,1,3),(4,2,2),(5,2,3),(6,3,1);
/*!40000 ALTER TABLE `client_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country` (
  `country_id` int NOT NULL AUTO_INCREMENT,
  `country_name` varchar(45) NOT NULL,
  `country_abbr` varchar(6) DEFAULT NULL,
  `country_code` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`country_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (1,'Lebanon','LEB','+961'),(2,'Australia','AUS',''),(3,'France','FR','');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photos`
--

DROP TABLE IF EXISTS `photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `photos` (
  `photo_id` int NOT NULL AUTO_INCREMENT,
  `photo_name` varchar(45) DEFAULT NULL,
  `photo_path` varchar(255) DEFAULT NULL,
  `photo_type` varchar(10) DEFAULT NULL,
  `photo_content` blob,
  PRIMARY KEY (`photo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photos`
--

LOCK TABLES `photos` WRITE;
/*!40000 ALTER TABLE `photos` DISABLE KEYS */;
/*!40000 ALTER TABLE `photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `category_id` int DEFAULT NULL,
  `supplier_id` int DEFAULT NULL,
  `product_name` varchar(45) NOT NULL,
  `product_desc` varchar(255) DEFAULT NULL,
  `product_price` decimal(10,2) DEFAULT NULL,
  `product_qty` int DEFAULT NULL,
  `product_disc` float DEFAULT NULL,
  `product_low_stock` int DEFAULT NULL,
  `product_optimal_stock` int DEFAULT NULL,
  `product_barcode` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `products_category__category_id_idx` (`category_id`),
  KEY `products_supplier__supplier_id_idx` (`supplier_id`),
  CONSTRAINT `products_category__category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE RESTRICT,
  CONSTRAINT `products_supplier__supplier_id` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers` (`supplier_id`) ON DELETE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,1,1,'tv sam 35','32 inch. tv',1000.00,15,10,3,10,NULL),(2,1,1,'tv tosh 35',NULL,1000.00,15,10,3,10,NULL),(3,1,1,'lap sam ',NULL,1000.00,15,10,5,8,NULL),(4,1,1,'iphone 14',NULL,1000.00,25,10,10,15,NULL),(5,1,1,'samsang note',NULL,1000.00,15,10,10,15,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suppliers`
--

DROP TABLE IF EXISTS `suppliers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suppliers` (
  `supplier_id` int NOT NULL AUTO_INCREMENT,
  `suplier_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`supplier_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suppliers`
--

LOCK TABLES `suppliers` WRITE;
/*!40000 ALTER TABLE `suppliers` DISABLE KEYS */;
INSERT INTO `suppliers` VALUES (1,'supp1');
/*!40000 ALTER TABLE `suppliers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-27 11:05:31
