import { type Metadata } from "next";

export const metadata: Metadata = {
	title: "Payment cancelled | Online Store",
};

export default async function CartCancelled() {
	return (
		<>
			<h1 className="mb-4 text-2xl font-extrabold tracking-tight text-steel-gray md:text-3xl">
				Payment has been cancelled
			</h1>
			<p className="text-steel-gray">
				If you wish to complete your purchase, please restart the payment process.
			</p>
		</>
	);
}
