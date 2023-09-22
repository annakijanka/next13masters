import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById } from "@/api/products";
import { ProductThumbnail } from "@/ui/atoms/ProductThumbnail";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { formatCurrency } from "@/utils";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `Product ${product.name} | Online Store`,
		description: product.description,
		openGraph: {
			images: product.thumbnail.src,
		},
	};
};

export default async function Product({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<>
			<article>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<ProductThumbnail {...product.thumbnail} />
					<div className="px-6">
						<h1 className="mb-4 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
							{product.name}
						</h1>
						<div className="mt-4 flex items-center">
							<div className="font-base small-caps text-lg text-white opacity-80">
								{formatCurrency(product.price)}
							</div>
						</div>
						<div className="mt-4 space-y-6">
							<p className="font-sans text-base text-white">{product.description}</p>
						</div>
						<div className="mt-8">
							<button
								className="from-dodger-blue via-purple-heart to-heliotrope inline-flex h-14 w-full items-center justify-center rounded-lg from-10% via-30% to-90% px-6 text-base font-medium leading-6 text-white transition-transform duration-150 hover:scale-[1.02] enabled:bg-gradient-to-r disabled:cursor-wait disabled:bg-gray-300"
								type="button"
							>
								Add to cart
							</button>
						</div>
					</div>
				</div>
			</article>
			<aside>
				<Suspense fallback={"Ładowanie..."}>
					<div className="py-16">
						<h2 className="py-8 text-xl font-extrabold leading-7 tracking-tight text-white">
							Similar products
						</h2>
						<SuggestedProducts />
					</div>
				</Suspense>
			</aside>
		</>
	);
}
