CREATE TABLE `issues` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text(256) NOT NULL,
	`description` text NOT NULL,
	`timestamp` text DEFAULT CURRENT_TIMESTAMP
);
