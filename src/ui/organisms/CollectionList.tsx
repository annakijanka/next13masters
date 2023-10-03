import { CollectionListItem } from "@/ui/molecules/CollectionListItem";
import { getCollections } from "@/api/collections";

export const CollectionList = async () => {
	const collections = await getCollections();
	return (
		<>
			<h1 className="sr-only">Collections</h1>
			<ul className="mb-14 mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
				{collections.map((collection) => {
					return <CollectionListItem key={collection.id} collection={collection} />;
				})}
			</ul>
		</>
	);
};
