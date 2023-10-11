// TODO: Refine this code for better performance in the future

import { type MetadataRoute } from "next";

export default function Sitemap(): MetadataRoute.Sitemap {
	const appUrl = process.env.APP_URL;

	if (!appUrl) {
		throw new Error("APP_URL environment variable is not defined.");
	}

	return [
		{
			url: appUrl,
			lastModified: new Date(),
		},
		{
			url: `${appUrl}/products`,
			lastModified: new Date(),
		},
	];
}
