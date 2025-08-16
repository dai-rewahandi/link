import { db } from "$lib/server/db"
import { sessions_db, user_db } from "$lib/server/db/schema"
import { fail, redirect, type Cookies } from "@sveltejs/kit"
import bcrypt from 'bcrypt'
import type { PageServerLoad } from "./$types"
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ cookies }: { cookies: Cookies }) => {
	const cookies_check = cookies.get('sessions_id')
	if (!cookies_check) return;
	const [sessions_db_check] = await db.select().from(sessions_db).where(eq(sessions_db.sessions_token, cookies_check))
	if (sessions_db_check) return redirect(302, '/user')
	return;

}

export const actions = {
  push: async ({ request }: { request: Request }) => {
    const form = await request.formData()
    const name = form.get('name')
    const username = form.get('username')
    const email = form.get('email')
    let password = form.get('password')
    if (!name || typeof name !== 'string' || !username || typeof username !== 'string' || !email || typeof email !== 'string' || !password || typeof password !== 'string') return fail(400, { mode: 'error', message: 'Error in input form!' })
    password = await bcrypt.hash(password, 11)
    try {
      await db.insert(user_db).values({
        name,
        username,
        email,
        password
      })
      return { mode: 'success', message: 'Acount success created!' }
    } catch (error) {
      console.log(error);
      return fail(400, { mode: 'error', message: 'Somenting wrong!' })

    }
  }
}
