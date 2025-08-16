import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const user_db = sqliteTable('user_db', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	username: text('username').unique().notNull(),
	email: text('email').notNull().unique(),
	password: text('password').notNull()
});

export const sessions_db = sqliteTable('sessions_db', {
	id: integer('id').primaryKey(),
	sessions_token: text('sessions_token').notNull(),
	user_id: integer('user_id').notNull().references(() => user_db.id, { onDelete: 'cascade' })
})


