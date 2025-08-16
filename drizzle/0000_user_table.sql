CREATE TABLE `user_db` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`username` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_db_username_unique` ON `user_db` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_db_email_unique` ON `user_db` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_db_password_unique` ON `user_db` (`password`);