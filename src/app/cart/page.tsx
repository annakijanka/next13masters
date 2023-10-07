import { redirect } from "next/navigation";
import NextImage from "next/image";
import { getCartByIdFromCookies } from "@/helpers";
import { ProductCounter } from "@/ui/molecules/ProductCounter";
import { formatCurrency } from "@/utils";

export default async function Cart() {
	const cart = await getCartByIdFromCookies();

	if (!cart) {
		redirect("/");
	}

	return (
		<>
			<h1 className="mb-4 text-2xl font-extrabold tracking-tight text-steel-gray md:text-3xl">
				Your Shopping Cart
			</h1>
			<div className="mb-14">
				<table className="w-full table-auto border-collapse">
					<thead className="text-sm text-gun-powder">
						<tr>
							<th
								className="border-b border-gun-powder/25 px-3 py-2 pb-3 pt-0 text-left font-medium sm:px-4 sm:py-3"
								colSpan={2}
							>
								Product
							</th>
							<th className="border-b border-gun-powder/25 px-3 py-2 pb-3 pt-0 text-left font-medium sm:px-4 sm:py-3">
								Quantity
							</th>
							<th className="border-b border-gun-powder/25 px-3 py-2 pb-3 pt-0 text-left font-medium sm:px-4 sm:py-3">
								Price
							</th>
						</tr>
					</thead>
					<tbody className="bg-bridal-heath text-base text-steel-gray sm:text-lg">
						{cart.orderItems.map(
							(item) =>
								item.product && (
									<tr key={item.id}>
										<td className="border-gun-powder/12.5 border-b px-3 py-2 sm:px-4 sm:py-3">
											{item.product.images[0] && (
												<NextImage
													className="rounded-lg shadow-md"
													src={item.product.images[0].url}
													alt={item.product.name}
													width={96}
													height={96}
												/>
											)}
										</td>
										<td className="border-gun-powder/12.5 border-b px-3 py-2 font-bold sm:px-4 sm:py-3">
											{item.product.name}
										</td>
										<td className="border-gun-powder/12.5 border-b px-3 py-2 sm:px-4 sm:py-3">
											<ProductCounter itemId={item.id} quantity={item.quantity} />
										</td>
										<td className="border-gun-powder/12.5 border-b px-3 py-2 sm:px-4 sm:py-3">
											{formatCurrency(item.product.price)}
										</td>
									</tr>
								),
						)}
					</tbody>
				</table>
			</div>
		</>
	);
}
