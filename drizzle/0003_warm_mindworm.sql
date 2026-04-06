CREATE TABLE `siteContent` (
	`id` int AUTO_INCREMENT NOT NULL,
	`key` varchar(300) NOT NULL,
	`label` varchar(300) NOT NULL,
	`page` varchar(100) NOT NULL,
	`section` varchar(100) NOT NULL,
	`fieldType` enum('text','textarea','image') NOT NULL DEFAULT 'text',
	`value` text,
	`updatedBy` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `siteContent_id` PRIMARY KEY(`id`),
	CONSTRAINT `siteContent_key_unique` UNIQUE(`key`)
);
