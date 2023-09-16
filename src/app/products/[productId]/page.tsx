import { Suspense } from "react";
import { getProductById, getProducts } from "@/api/products";
import { ProductDescription } from "@/ui/atoms/ProductDescription";
import { ProductThumbnail } from "@/ui/atoms/ProductThumbnail";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";

export const generateStaticParams = async () => {
	const products = await getProducts();
	return products.map((product) => ({ productId: product.id }));
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
						<ProductDescription product={product} />
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
