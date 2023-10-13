import NextImage from "next/image";
import { ProductCounter } from "@/ui/molecules/ProductCounter";
import { formatCurrency } from "@/utils";
import { RemoveButton } from "@/ui/atoms/RemoveButton";
import { CheckoutButton } from "@/ui/atoms/CheckoutButton";
import { getCartByIdFromCookies, handleStripePaymentAction } from "@/api/cartUtils";

export default async function Cart() {
	const cart = await getCartByIdFromCookies();
	return (
		<>
			<h1 className="mb-4 text-2xl font-extrabold tracking-tight text-steel-gray md:text-3xl">
				Your Shopping Cart
			</h1>
			<div className="mb-14">
				{cart?.orderItems && cart.orderItems.length > 0 ? (
					<>
						<table className="w-full table-auto border-collapse">
							<thead className="text-sm text-gun-powder">
								<tr>
									<th
										className="px-2 py-3 pb-3 pt-0 text-left font-medium sm:px-3 sm:py-4"
										colSpan={2}
									>
										Product
									</th>
									<th className="px-2 py-3 pb-3 pt-0 text-left font-medium sm:px-3 sm:py-4">
										Quantity
									</th>
									<th className="px-2 py-3 pb-3 pt-0 text-left font-medium sm:px-3 sm:py-4">
										Price
									</th>
									<th></th>
								</tr>
							</thead>
							<tbody className="bg-bridal-heath text-base text-steel-gray sm:text-lg">
								{cart.orderItems.map(
									(item) =>
										item.product && (
											<tr key={item.id}>
												<td className="border-gun-powder/12.5 border-b px-0 py-3 sm:px-3 sm:py-4">
													{item.product.images[0] && (
														<NextImage
															className="hidden rounded-lg shadow-md sm:block"
															src={item.product.images[0].url}
															alt={item.product.name}
															width={96}
															height={96}
														/>
													)}
												</td>
												<td className="border-gun-powder/12.5 border-b px-2 py-3 font-bold sm:px-3 sm:py-4">
													{item.product.name}
												</td>
												<td className="border-gun-powder/12.5 border-b px-2 py-3 sm:px-3 sm:py-4">
													<ProductCounter itemId={item.id} quantity={item.quantity} />
												</td>
												<td className="border-gun-powder/12.5 border-b px-2 py-3 sm:px-3 sm:py-4">
													{formatCurrency(item.product.price * item.quantity)}
												</td>
												<td className="border-gun-powder/12.5 border-b px-2 py-3 sm:px-3 sm:py-4">
													<RemoveButton itemId={item.id} />
												</td>
											</tr>
										),
								)}
							</tbody>
						</table>
						<div className="mt-6 grid grid-cols-2 gap-4">
							<form action={handleStripePaymentAction}>
								<CheckoutButton />
							</form>
						</div>
					</>
				) : (
					<p className="text-steel-gray">No items in the cart.</p>
				)}
			</div>
		</>
	);
}
