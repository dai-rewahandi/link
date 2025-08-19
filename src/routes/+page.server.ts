import { db } from '$lib/server/db';
import { link_db, user_db } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const links = await db.select().from(link_db);
	const users = await db.select({ username: user_db.username, rule: user_db.rule }).from(user_db);
	return {
		data: {
            allusername: users ,
			alllink: links.length,
			alluser: users.length
		}
	};
};
