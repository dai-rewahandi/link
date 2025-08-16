CREATE TABLE `link_db` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`link` text NOT NULL,
	`user_id` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user_db`(`id`) ON UPDATE no action ON DELETE cascade
);
