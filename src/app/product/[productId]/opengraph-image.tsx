import { ImageResponse } from "next/server";
import { getProductById } from "@/api/products";

export const runtime = "edge";
export const alt = "Online Store";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	if (!product) {
		return;
	}

	return new ImageResponse(
		(
			<div
				tw="w-full h-full flex justify-center items-center"
				style={{ backgroundColor: "rgb(64, 61, 88)" }}
			>
				<img
					tw="rounded-lg shadow-md mr-6"
					alt={product.name}
					width={400}
					height={400}
					src={product.images[0]?.url ?? ""}
				/>
				<div tw="flex max-w-sm flex-col" style={{ color: "rgb(255, 252, 247)" }}>
					<h1 tw="font-extrabold text-6xl mb-1 tracking-tight">{product.name}</h1>
					<span
						tw="rounded bg-gun-powder px-2 py-1 text-xs font-semibold uppercase"
						style={{ backgroundColor: "rgb(37, 35, 51)", color: "rgb(255, 252, 247)" }}
					>
						{product.categories[0]?.name}
					</span>
					<p>{product.description}</p>
				</div>
			</div>
		),
	);
}
