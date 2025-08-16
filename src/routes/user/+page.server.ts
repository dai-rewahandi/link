import { redirect, type Cookies } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { db } from "$lib/server/db";
import { eq } from "drizzle-orm";
import { sessions_db, user_db } from "$lib/server/db/schema";

export const load: PageServerLoad = async ({ cookies }: { cookies: Cookies }) => {
	const cookies_check = cookies.get('sessions_id')
	if (!cookies_check) return redirect(302, '/signin')
	const [sessions_db_check] = await db.select().from(sessions_db).where(eq(sessions_db.sessions_token, cookies_check))
	if (!sessions_db_check) return redirect(302, '/signin')
	const [user_data] = await db.select({
		name: user_db.name,
		username: user_db.username,
		email: user_db.email
	}).from(user_db).where(eq(user_db.id, sessions_db_check.user_id))
	if (!user_data) return { mode: 'error', message: 'Data user not found!' }
	return {
		data: user_data
	}

}
