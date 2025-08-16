CREATE TABLE `sessions_db` (
	`id` integer PRIMARY KEY NOT NULL,
	`sessions_token` text NOT NULL,
	`user_id` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user_db`(`id`) ON UPDATE no action ON DELETE cascade
);
