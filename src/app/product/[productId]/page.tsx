import { Suspense } from "react";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cookies } from "next/headers";
import { getProductById } from "@/api/products";
import { ProductThumbnail } from "@/ui/atoms/ProductThumbnail";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { formatCurrency } from "@/utils";
import { Loading } from "@/ui/atoms/Loading";
import { Variants } from "@/ui/organisms/Variants";
import { addCartItem, createCart, getCartById } from "@/api/orders";
import { type OrderFragment } from "@/gql/graphql";

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
		openGraph: {
			images: product.images[0]?.url,
		},
	};
};

export default async function Product({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	if (!product) {
		return notFound();
	}

	async function addProductToCartAction() {
		"use server";
		const cart = await getOrCreateCart();
		await addProductToCart(cart.id, params.productId);
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
									className="font-base small-caps text-lg text-steel-gray opacity-70 hover:text-brick-red hover:opacity-100"
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
								<input type="text" name="productId" value={product.id} hidden />
								<button
									className="inline-flex h-14 w-full items-center justify-center rounded-lg from-gun-powder from-10% via-brick-red via-50% to-java to-90% px-6 text-base font-bold leading-6 text-bridal-heath transition-transform duration-300 hover:scale-[1.04] enabled:bg-gradient-to-r disabled:cursor-wait disabled:bg-gray-300"
									type="submit"
								>
									Add to cart
								</button>
							</form>
						</div>
					</div>
				</div>
			</article>
			<Suspense fallback={<Loading />}>
				<aside>
					<div className="pb-16 pt-8">
						<h2 className="py-8 text-xl font-extrabold leading-7 tracking-tight text-steel-gray">
							Top rated
						</h2>
						<SuggestedProducts />
					</div>
				</aside>
			</Suspense>
		</>
	);
}

async function getOrCreateCart(): Promise<OrderFragment> {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await getCartById(cartId);
		if (cart) {
			return cart;
		}
	}

	const newCart = await createCart();
	if (!newCart) {
		throw new Error("Failed to create cart");
	}
	cookies().set("cartId", newCart.id, {
		expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2),
		httpOnly: true,
		sameSite: "lax",
	});
	return newCart;
}

async function addProductToCart(cartId: string, productId: string) {
	const product = await getProductById(productId);
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await addCartItem(product.price, cartId, productId);
}
