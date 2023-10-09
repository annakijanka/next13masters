import Stripe from "stripe";
import { formatCurrency } from "@/utils";

export default async function CartSuccess({
	searchParams,
}: {
	searchParams: { session_id: string };
}) {
	if (!process.env.STRIPE_SECRET_KEY) {
		return null;
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const stripeCheckoutSession = await stripe.checkout.sessions.retrieve(searchParams.session_id);

	return (
		<>
			<h1 className="mb-4 text-2xl font-extrabold tracking-tight text-steel-gray md:text-3xl">
				Payment has been successful
			</h1>
			<p className="text-steel-gray">
				{`We've received your payment, and your order with a total value of ${formatCurrency(
					stripeCheckoutSession.amount_total ?? 0,
				)} is now in progress.`}
			</p>
		</>
	);
}
