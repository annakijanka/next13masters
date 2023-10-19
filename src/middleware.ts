import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: [
		/\//,
		/\/privacy-policy/,
		/\/return-policy/,
		/\/terms-of-service/,
		/\/cart/,
		/\/cart\/(.*)/,
		/\/categories/,
		/\/categories\/(.*)/,
		/\/collections/,
		/\/collections\/(.*)/,
		/\/product/,
		/\/product\/(.*)/,
		/\/products/,
		/\/products\/(.*)/,
		/\/search/,
	],
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
