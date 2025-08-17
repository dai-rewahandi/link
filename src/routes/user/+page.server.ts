import { fail, redirect, type Cookies } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { db } from "$lib/server/db";
import { and, eq } from "drizzle-orm";
import { link_db, sessions_db, user_db } from "$lib/server/db/schema";

export const load: PageServerLoad = async ({ cookies }: { cookies: Cookies }) => {
        const cookies_check = cookies.get('sessions_id')
        if (!cookies_check) return redirect(302, '/signin')
        const [sessions_db_check] = await db.select().from(sessions_db).where(eq(sessions_db.sessions_token, cookies_check))
        if (!sessions_db_check) return redirect(302, '/signin')
        const [user_data] = await db.select().from(user_db).where(eq(user_db.id, sessions_db_check.user_id))
        if (!user_data) return { mode: 'error', message: 'Data user not found!' }
        const link_check = await db.select().from(link_db).where(eq(link_db.user_id, sessions_db_check.user_id))
        return {
                data: {
                        user_data: user_data,
                        user_link: link_check
                }
        }
}


export const actions = {
        addlink: async ({ request, cookies }: { request: Request, cookies: Cookies }) => {
                const form = await request.formData()
                const name = form.get('name')
                const link = form.get('link')
								const brand = form.get('brand')
                if (!name || typeof name !== 'string' || !link || typeof link !== 'string' || !brand || typeof brand !== 'string') return fail(400, { mode: 'error', message: 'data faild!' })
                try {
                        const cookies_check = cookies.get('sessions_id')
                        if (!cookies_check) return;
                        const [sessions_check] = await db.select().from(sessions_db).where(eq(sessions_db.sessions_token, cookies_check))
                        await db.insert(link_db).values({
                                name,
                                link,
                                user_id: sessions_check.user_id,
																brand: brand 
                        })
                        return { mode: 'success', message: 'New link added!' }
                } catch (error) {
                        return fail(400, { mode: 'error', message: 'Add faild!' })
                }
        },
        deletelink: async ({ request, cookies }: { request: Request, cookies: Cookies }) => {
                const form = await request.formData()
                const id: number = Number(form.get('id'))
                if (isNaN(id)) return fail(400, { mode: 'error', message: 'Faild request' })
                const cookies_check = cookies.get('sessions_id');
                if (!cookies_check) return;
                const [sessions_check] = await db.select().from(sessions_db).where(eq(sessions_db.sessions_token, cookies_check))
                try {
                        await db.delete(link_db).where(and(eq(link_db.id, id), eq(link_db.user_id, sessions_check.user_id)))
                        return { mode: 'success', message: 'Success delete link' }
                } catch (error) {
                        return fail(400, { mode: 'error', message: 'Faild delete link' })
                }
        }
}

