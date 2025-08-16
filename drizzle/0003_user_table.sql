PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_sessions_db` (
	`id` integer PRIMARY KEY NOT NULL,
	`sessions_token` text NOT NULL,
	`user_id` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user_db`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_sessions_db`("id", "sessions_token", "user_id") SELECT "id", "sessions_token", "user_id" FROM `sessions_db`;--> statement-breakpoint
DROP TABLE `sessions_db`;--> statement-breakpoint
ALTER TABLE `__new_sessions_db` RENAME TO `sessions_db`;--> statement-breakpoint
PRAGMA foreign_keys=ON;