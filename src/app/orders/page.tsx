import NextImage from "next/image";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { formatCurrency } from "@/utils";
import { getOrdersByEmail } from "@/api/cart";

export default async function Orders() {
	const user = await currentUser();
	const email = user?.emailAddresses[0]?.emailAddress;

	if (!email) return redirect("/sign-in");

	const orders = await getOrdersByEmail(email);

	return (
		<>
			<h1 className="mb-4 text-2xl font-extrabold tracking-tight text-steel-gray md:text-3xl">
				Hello {user.firstName}
			</h1>
			<div className="mb-14">
				{orders[0]?.orderItems && orders[0].orderItems.length > 0 ? (
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
								</tr>
							</thead>
							<tbody className="bg-bridal-heath text-base text-steel-gray sm:text-lg">
								{orders[0].orderItems.map(
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
													{item.quantity}
												</td>
												<td className="border-gun-powder/12.5 border-b px-2 py-3 sm:px-3 sm:py-4">
													{formatCurrency(item.product.price * item.quantity)}
												</td>
											</tr>
										),
								)}
							</tbody>
						</table>
					</>
				) : (
					<p className="text-steel-gray">You have no orders.</p>
				)}
			</div>
		</>
	);
}
