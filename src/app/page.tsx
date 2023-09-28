import { getCollections } from "@/api/collections";
import { CollectionsList } from "@/ui/organisms/CollectionsList";

export default async function Home() {
	const collections = await getCollections();
	return (
		<>
			<CollectionsList collections={collections} />
		</>
	);
}
