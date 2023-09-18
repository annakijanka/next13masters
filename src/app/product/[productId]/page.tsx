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
					<div className="overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
						<ProductThumbnail {...product.thumbnail} />
					</div>
					<div className="px-6">
						<h1 className="mb-4 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
							{product.name}
						</h1>
						<div className="mt-4 flex items-center">
							<div className="font-base small-caps text-lg text-slate-800">
								{formatCurrency(product.price)}
							</div>
						</div>
						<div className="mt-4 space-y-6">
							<p className="font-sans text-base text-slate-500">{product.longDescription}</p>
						</div>
						<div className="mt-8">
							<button
								className="inline-flex h-14 w-full items-center justify-center rounded-md from-[#C17EFD] from-20% via-[#898AF9] to-[#7EC3FD] to-80% px-6 text-base font-medium leading-6 text-slate-900 shadow transition duration-150 ease-in-out enabled:bg-gradient-to-r hover:enabled:brightness-125 disabled:cursor-wait disabled:bg-gray-300"
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
						<h2 className="py-8 text-xl font-extrabold leading-7 tracking-tight text-slate-900">
							Similar products
						</h2>
						<SuggestedProducts />
					</div>
				</Suspense>
			</aside>
		</>
	);
}
