import { fail, redirect, type Cookies } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { db } from "$lib/server/db";
import { eq } from "drizzle-orm";
import { link_db, sessions_db, user_db } from "$lib/server/db/schema";

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


export const actions = {
				addlink: async ({ request, cookies }:{ request: Request, cookies: Cookies }) => {
								const form = await request.formData()
								const name = form.get('name')
								const link = form.get('link')
								if(!name || typeof name !== 'string' || !link || typeof link !== 'string') return fail(400, { mode: 'error', message: 'data faild!' })
								try{
												const cookies_check = cookies.get('sessions_id')
												if(!cookies_check) return ;
												const [sessions_check] = await db.select().from(sessions_db).where(eq(sessions_db.sessions_token, cookies_check))
												await db.insert(link_db).values({
																name,
																link,
																user_id: sessions_check.user_id
												})
												return { mode: 'success', message: 'New link added!' }
								}catch(error){
												return fail(400, { mode: 'error', message: 'Add faild!' })
								}
				}
}
