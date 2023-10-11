import { revalidatePath } from "next/cache";
import { type NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<Response> {
	const body: unknown = await request.json();

	if (
		typeof body === "object" &&
		body !== null &&
		"data" in body &&
		typeof body.data === "object" &&
		body.data !== null &&
		"id" in body.data &&
		typeof body.data.id === "string"
	) {
		const productId: string = body.data.id;
		console.log(`Revalidating /product/${productId}`);
		revalidatePath(`/product/${productId}`);
		console.log(`Revalidating /collections/pop-of-color`);
		revalidatePath(`/collections/pop-of-color`);
		console.log(`Revalidating /collections/beach-vibe`);
		revalidatePath(`/collections/beach-vibe`);
		console.log(`Revalidating /collections/new-products`);
		revalidatePath(`/collections/new-products`);
		return new Response(null, { status: 204 });
	} else {
		return new Response(null, { status: 400 });
	}
}
