import { db } from '$lib/server/db';
import { link_db, user_db } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const links = await db.select().from(link_db);
	const users = await db.select().from(user_db);
	return {
		data: {
			alllink: links.length,
			alluser: users.length
		}
	};
};
