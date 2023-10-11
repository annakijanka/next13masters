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
		console.log(`Revalidating /products`);
		revalidatePath(`/products`);
		return new Response(null, { status: 204 });
	} else {
		return new Response(null, { status: 400 });
	}
}
