import { routing } from "@beyond-js/kernel/routing";
import { Router } from "./config/controller";

const router = new Router();
routing.redirect = async function redirect(uri): Promise<string> {
	const response: { pathname: string } = await router.load(uri.pathname);
	return response.pathname;
};

// routing.missing = async (pathname: String) => {
// 	// HERE GOES THE 404 LOGIC
// 	return pathname
// };
