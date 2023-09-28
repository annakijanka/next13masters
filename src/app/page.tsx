import { Suspense } from "react";
import { getCollections } from "@/api/collections";
import { CollectionsList } from "@/ui/organisms/CollectionsList";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";

export default async function Home() {
	const collections = await getCollections();
	return (
		<>
			<section>
				<CollectionsList collections={collections} />
			</section>
			<aside>
				<Suspense fallback={<div className="text-white">Ładowanie...</div>}>
					<div className="pb-16 pt-8">
						<h2 className="py-8 text-xl font-extrabold leading-7 tracking-tight text-white">
							Top rated
						</h2>
						<SuggestedProducts />
					</div>
				</Suspense>
			</aside>
		</>
	);
}
