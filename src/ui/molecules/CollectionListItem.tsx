import Link from "next/link";
import { CollectionThumbnail } from "../atoms/CollectionThumbnail";
import { CollectionDescription } from "../atoms/CollectionDescription";
import { type CollectionFragment } from "@/gql/graphql";

type CollectionListItemProps = {
	collection: CollectionFragment;
};

export const CollectionListItem = ({ collection }: CollectionListItemProps) => {
	return (
		<li>
			<Link href={`/collections/${collection.slug}`}>
				<article>
					<CollectionThumbnail
						src={collection.image.url}
						alt={collection.name}
						hasAnimation={true}
					/>
					<CollectionDescription collection={collection} />
				</article>
			</Link>
		</li>
	);
};
