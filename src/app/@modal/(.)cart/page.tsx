import NextImage from "next/image";
import { getCartByIdFromCookies, handleStripePaymentAction } from "@/api/cartUtils";
import { CheckoutButton } from "@/ui/atoms/CheckoutButton";
import { Overlay } from "@/ui/atoms/Overlay";
import { formatCurrency } from "@/utils";
import { FullViewButton } from "@/ui/atoms/FullViewButton";

export default async function CartModal() {
	const cart = await getCartByIdFromCookies();
	return (
		<aside className="fixed inset-0 z-20 backdrop-blur-sm">
			<Overlay />
			<div className="absolute right-0 top-0 z-40 flex h-full w-full max-w-sm animate-slide flex-col bg-pampas px-5 py-6">
				<div className="mb-4 grid grid-cols-2 gap-4">
					<h2 className="text-xl font-extrabold leading-7 tracking-tight text-steel-gray opacity-80">
						Shopping Cart
					</h2>
					<div className="text-right">
						<FullViewButton />
					</div>
				</div>
				{cart?.orderItems && cart.orderItems.length > 0 ? (
					<>
						<ul className="mb-4 overflow-y-scroll bg-bridal-heath py-3">
							{cart?.orderItems.map(
								(item) =>
									item.product && (
										<li
											className="border-gun-powder/12.5 flex flex-1 border-b px-2 py-3 first:pt-0 last:border-none last:pb-0"
											key={item.id}
										>
											<div className="mr-2">
												{item.product.images[0] && (
													<NextImage
														className="rounded-lg shadow-md"
														src={item.product.images[0].url}
														alt={item.product.name}
														width={64}
														height={64}
													/>
												)}
											</div>
											<div className="flex flex-1 flex-col">
												<h3 className="font-semibold text-steel-gray">{item.product.name}</h3>
												<div className="flex justify-between">
													<span>Quantity: {item.quantity}</span>
													<span>{formatCurrency(item.total)}</span>
												</div>
											</div>
										</li>
									),
							)}
						</ul>
						<form className="mt-auto" action={handleStripePaymentAction}>
							<CheckoutButton />
						</form>
					</>
				) : (
					<p className="text-steel-gray">No items in the cart.</p>
				)}
			</div>
		</aside>
	);
}
