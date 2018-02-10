CREATE DATABASE  IF NOT EXISTS `memorize`;
USE `memorize`;


DROP TABLE IF EXISTS `words`;

CREATE TABLE `words` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `en` text,
  `trns` text,
  `ignore` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;