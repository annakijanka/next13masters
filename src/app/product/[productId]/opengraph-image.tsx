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
				style={{ backgroundColor: "rgb(242, 239, 234)" }}
			>
				<img
					tw="rounded-lg shadow-md mr-6"
					alt={product.name}
					width={400}
					height={400}
					src={product.images[0]?.url ?? ""}
				/>
				<h1 tw="font-extrabold text-6xl tracking-tight" style={{ color: "rgb(37, 35, 51)" }}>
					{product.name}
				</h1>
			</div>
		),
	);
}
