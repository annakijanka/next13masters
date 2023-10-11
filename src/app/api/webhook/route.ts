import { revalidatePath } from "next/cache";
import { type NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<Response> {
	const body: unknown = await request.json();

	if (typeof body === "object" && body && "id" in body && typeof body.id === "string") {
		console.log(`Revalidating /product/${body.id}`);
		revalidatePath(`/product/${body.id}`);
		console.log(`Revalidating /products`);
		revalidatePath(`/products`);
		return new Response(null, { status: 204 });
	} else {
		return new Response(null, { status: 400 });
	}
}
