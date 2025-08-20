import { db } from '$lib/server/db';
import { sessions_db, user_db } from '$lib/server/db/schema';
import { fail, redirect, type Cookies } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }: { cookies: Cookies }) => {
	const cookies_check = cookies.get('sessions_id');
	if (!cookies_check) return;
	const [sessions_db_check] = await db
		.select()
		.from(sessions_db)
		.where(eq(sessions_db.sessions_token, cookies_check));
	if (sessions_db_check) return redirect(302, '/user');
	return;
};
export const actions = {
	push: async ({ request, cookies }: { request: Request; cookies: Cookies }) => {
		const form = await request.formData();
		const email = form.get('email');
		const password = form.get('password');
		if (!email || !password || typeof email !== 'string' || typeof password !== 'string')
			return fail(400, { mode: 'error', message: 'Something went wrong. Please try again.' });
		const [user] = await db.select().from(user_db).where(eq(user_db.email, email));
		if (!user) return fail(400, { mode: 'error', message: 'User not found.' });
		const password_check = await bcrypt.compare(password, user.password);
		if (!password_check) return fail(400, { mode: 'error', message: 'Authentication failed. Incorrect password.' });
		const [sessions_check] = await db
			.select()
			.from(sessions_db)
			.where(eq(sessions_db.user_id, user.id));
		const sessions_token = randomUUID();
		const maxAge = 1000 * 60 * 60 * 24 * 7;
		if (!sessions_check) {
			await db.insert(sessions_db).values({
				sessions_token,
				user_id: user.id
			});
			cookies.set('sessions_id', sessions_token, {
				path: '/',
				httpOnly: true,
				secure: true,
				sameSite: true,
				maxAge: maxAge
			});
		} else {
			await db.update(sessions_db).set({
				sessions_token,
				user_id: user.id
			});
			cookies.set('sessions_id', sessions_token, {
				path: '/',
				httpOnly: true,
				secure: true,
				sameSite: true,
				maxAge: maxAge
			});
		}
		return redirect(302, '/user');
	},
	signout: async ({ cookies }: { cookies: Cookies }) => {
		cookies.delete('sessions_id', {
			path: '/'
		});
	}
};
