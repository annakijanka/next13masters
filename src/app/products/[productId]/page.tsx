export default function Product({ params }: { params: { productId: string } }) {
	return (
		<>
			<h1 className="mb-4 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
				{params.productId}
			</h1>
		</>
	);
}
