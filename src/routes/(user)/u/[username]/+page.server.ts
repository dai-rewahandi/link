import { db } from "$lib/server/db";
import { link_db, user_db } from "$lib/server/db/schema";
import { eq } from "drizzle-orm";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({params}) => {
    const param = params
    console.log(param);
    const [user_data] = await db.select().from(user_db).where(eq(user_db.username, param.username))
    if(!user_data) return { mode: 'warn', message: 'Username Not Found' }
    const user_link = await db.select({
        brand: link_db.brand,
        link: link_db.link,
        name: link_db.name
    }).from(link_db).where(eq(link_db.user_id, user_data.id))
    if(user_link.length === 0) return;
    return {
        data: {
            link: user_link
        }
    }
}
