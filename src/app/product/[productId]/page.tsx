import { Suspense } from "react";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { revalidateTag } from "next/cache";
import { getProductById } from "@/api/products";
import { ProductThumbnail } from "@/ui/atoms/ProductThumbnail";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { formatCurrency } from "@/utils";
import { Loading } from "@/ui/atoms/Loading";
import { Variants } from "@/ui/organisms/Variants";
import { AddToCartButton } from "@/ui/atoms/AddToCartButton";
import { addProductToCart, getOrCreateCart } from "@/api/cartUtils";
import { ReviewForm } from "@/ui/organisms/ReviewForm";
import { getReviewsByProductId } from "@/api/reviews";
import { calculateAverageRating } from "@/api/product";

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
		title: `${product.name} Product | Online Store`,
		description: product.description,
	};
};

export default async function Product({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	const existingReviews = await getReviewsByProductId(params.productId);
	await calculateAverageRating(params.productId, existingReviews);

	if (!product) {
		return notFound();
	}

	async function addProductToCartAction() {
		"use server";
		const cart = await getOrCreateCart();
		const cartItem = cart.orderItems.find((item) => item.product?.id === params.productId);
		const updatedQuantity = cartItem ? cartItem.quantity + 1 : 1;
		const orderItemId = cartItem ? cartItem.id : "";

		await addProductToCart(cart.id, params.productId, updatedQuantity, orderItemId);

		revalidateTag("cart");
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
							<div className="text-xl font-extrabold leading-7 tracking-tight text-steel-gray opacity-80">
								{formatCurrency(product.price)}
							</div>
							{product.categories[0] && (
								<Link
									className="font-base small-caps text-base font-medium text-steel-gray opacity-70 hover:text-brick-red hover:opacity-100"
									href={`/categories/${product.categories[0].slug}`}
								>
									{product.categories[0].name}
								</Link>
							)}
						</div>
						<div className="mt-4 space-y-6">
							<p className="font-sans text-base text-steel-gray">{product.description}</p>
						</div>
						<Suspense fallback={<Loading />}>
							<div className="mt-4 space-y-6">
								<div className="grid grid-cols-2 gap-8">
									<Variants productId={params.productId} />
								</div>
							</div>
						</Suspense>
						<div className="mt-8">
							<form action={addProductToCartAction}>
								<input type="text" name="productId" value={product.id} hidden readOnly />
								<AddToCartButton />
							</form>
						</div>
					</div>
				</div>
			</article>
			<Suspense fallback={<Loading />}>
				<aside>
					<div className="pt-8">
						<h2 className="py-8 text-xl font-extrabold leading-7 tracking-tight text-steel-gray">
							Top rated from Algolia
						</h2>
						<SuggestedProducts />
					</div>
					<div className="pb-4 pt-8 sm:pb-16">
						<ReviewForm productId={params.productId} existingReviews={existingReviews} />
					</div>
				</aside>
			</Suspense>
		</>
	);
}
