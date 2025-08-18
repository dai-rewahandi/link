import type { Cookies } from '@sveltejs/kit';
import type { PageServerLoad } from './signin/$types';
import { db } from '$lib/server/db';
import { sessions_db, user_db } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ cookies }: { cookies: Cookies }) => {
	const cookies_check = cookies.get('sessions_id');
	if (!cookies_check) return { is_signin: false };
	const [sessions_check] = await db
		.select()
		.from(sessions_db)
		.where(eq(sessions_db.sessions_token, cookies_check));
	if (!sessions_check) return { is_signin: false };
const [user] = await db.select().from(user_db).where(eq(user_db.id, sessions_check.user_id))
	return { 
								data: { 
												is_signin: true, 
												user: user.username 
								}
				};
};
