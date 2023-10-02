/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
			},
		],
	},
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	async redirects() {
		return [
			{
				source: "/(products|product)",
				destination: "/products/1",
				permanent: true,
			},
			{
				source: "/search",
				destination: "/search/1",
				permanent: true,
			},
		];
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
