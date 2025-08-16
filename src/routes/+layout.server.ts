import type { Cookies } from "@sveltejs/kit";
import type { PageServerLoad } from "./signin/$types";

export const load: PageServerLoad = ({ cookies }: { cookies: Cookies }) => {
	const cookies_check = cookies.get('sessions_id')
	if (!cookies_check) return { is_signin: false }
	return { is_signin: true }
}
