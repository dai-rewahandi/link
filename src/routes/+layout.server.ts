import type { Cookies } from "@sveltejs/kit";
import type { PageServerLoad } from "./signin/$types";
import { db } from "$lib/server/db";
import { sessions_db } from "$lib/server/db/schema";
import { eq } from "drizzle-orm";

export const load: PageServerLoad = async ({ cookies }: { cookies: Cookies }) => {
        const cookies_check = cookies.get('sessions_id')
        if (!cookies_check) return { is_signin: false }
        const [sessions_check] = await db.select().from(sessions_db).where(eq(sessions_db.sessions_token, cookies_check))
        if (!sessions_check) return { is_signin: false }
        return { is_signin: true }
}
