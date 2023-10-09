import { type MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots {
	const appUrl = process.env.APP_URL;

	if (!appUrl) {
		throw new Error("APP_URL environment variable is not defined.");
	}

	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: "/admin/",
		},
		sitemap: `${appUrl}/sitemap.xml`,
	};
}
