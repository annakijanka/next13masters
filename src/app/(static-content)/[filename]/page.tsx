import { type Metadata } from "next";
import { type ComponentType } from "react";
import { notFound } from "next/navigation";
import { capitalizeFirstLetter } from "@/utils";

export const generateMetadata = async ({
	params,
}: {
	params: { filename: string };
}): Promise<Metadata> => {
	const capitalizedFilename = capitalizeFirstLetter(params.filename);
	let description =
		"Discover great deals at our online store. Shop now for quality products and unbeatable prices.";

	if (capitalizedFilename === "Terms") {
		description = "Our terms, your clarity: Navigate our policies and guidelines effortlessly.";
	}

	return {
		title: `${capitalizedFilename} | Online Store`,
		description: description,
	};
};

export default async function Terms({ params }: { params: { filename: string } }) {
	const Page = await import(`./${params.filename}.mdx`).then(
		(module: { default: ComponentType }) => module.default,
		() => notFound(),
	);
	return <Page />;
}
