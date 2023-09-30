import { Suspense } from "react";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductById } from "@/api/products";
import { ProductThumbnail } from "@/ui/atoms/ProductThumbnail";
import { formatCurrency } from "@/utils";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { ProductColorVariants } from "@/ui/molecules/ProductColorVariants";
import { getProductColorVariants } from "@/api/variants";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	if (!product) {
		return notFound();
	}

	return {
		title: `Product ${product.name} | Online Store`,
		description: product.description,
		openGraph: {
			images: product.images[0]?.url,
		},
	};
};

export default async function Product({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	const productColorVariants = await getProductColorVariants();
	const colorsForTargetProduct = productColorVariants
		.filter((variant) => variant.product?.id === params.productId)
		.map((variant) => variant.color.toLowerCase());

	if (!product) {
		return notFound();
	}

	return (
		<>
			<article>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<ProductThumbnail src={product.images[0]?.url} alt={product.name} />
					<div className="px-6">
						<h1 className="mb-4 text-2xl font-extrabold tracking-tight text-steel-gray md:text-3xl">
							{product.name}
						</h1>
						<div className="mt-4 flex flex-row justify-between">
							<div className="font-base small-caps text-lg text-steel-gray opacity-80">
								{formatCurrency(product.price)}
							</div>
							{product.categories[0] && (
								<Link
									className="font-base small-caps text-lg text-steel-gray opacity-70 hover:text-medium-carmine hover:opacity-100"
									href={`/categories/${product.categories[0].slug}`}
								>
									{product.categories[0].name}
								</Link>
							)}
						</div>
						<div className="mt-4 space-y-6">
							<p className="font-sans text-base text-steel-gray">{product.description}</p>
						</div>
						<div className="mt-4 space-y-6">
							<div className="grid grid-cols-2 gap-8">
								{colorsForTargetProduct.length > 0 && (
									<ProductColorVariants colorsForTargetProduct={colorsForTargetProduct} />
								)}
							</div>
						</div>
						<div className="mt-8">
							<button
								className="inline-flex h-14 w-full items-center justify-center rounded-lg from-gun-powder from-10% via-viking via-30% to-medium-carmine to-90% px-6 text-base font-medium leading-6 text-steel-gray transition-transform duration-150 hover:scale-[1.02] enabled:bg-gradient-to-r disabled:cursor-wait disabled:bg-gray-300"
								type="button"
							>
								Add to cart
							</button>
						</div>
					</div>
				</div>
			</article>
			<aside>
				<Suspense fallback={<div className="text-steel-gray">Ładowanie...</div>}>
					<div className="pb-16 pt-8">
						<h2 className="py-8 text-xl font-extrabold leading-7 tracking-tight text-steel-gray">
							Top rated
						</h2>
						<SuggestedProducts />
					</div>
				</Suspense>
			</aside>
		</>
	);
}
