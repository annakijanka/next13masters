import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: [
		/^\/$/,
		/^\/privacy-policy\/$/,
		/^\/return-policy\/$/,
		/^\/terms-of-service\/$/,
		/^\/cart\/.*$/,
		/^\/categories\/.*$/,
		/^\/collections\/.*$/,
		/^\/product\/.*$/,
		/^\/products\/.*$/,
		/^\/search\/.*$/,
	],
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
