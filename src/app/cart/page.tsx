import { redirect } from "next/navigation";
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
				<table className="w-full table-auto border-collapse text-sm">
					<thead>
						<tr>
							<th className="border-b border-gun-powder/25 p-4 pb-3 pt-0 text-left font-medium text-gun-powder">
								Product
							</th>
							<th className="border-b border-gun-powder/25 p-4 pb-3 pt-0 text-left font-medium text-gun-powder">
								Quantity
							</th>
							<th className="border-b border-gun-powder/25 p-4 pb-3 pt-0 text-left font-medium text-gun-powder">
								Price
							</th>
						</tr>
					</thead>
					<tbody className="bg-bridal-heath">
						{cart.orderItems.map(
							(item) =>
								item.product && (
									<tr key={item.id}>
										<td className="border-gun-powder/12.5 border-b p-4 text-gun-powder">
											{item.product.name}
										</td>
										<td className="border-gun-powder/12.5 border-b p-4 text-gun-powder">
											<ProductCounter itemId={item.id} quantity={item.quantity} />
										</td>
										<td className="border-gun-powder/12.5 border-b p-4 text-gun-powder">
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
