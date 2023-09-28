import { type CollectionFragment } from "@/gql/graphql";

type CollectionDescriptionProps = {
	collection: CollectionFragment;
};

export const CollectionDescription = ({ collection: { name } }: CollectionDescriptionProps) => {
	return (
		<div className="mt-2">
			<div className="flex flex-row justify-between">
				<h3 className="font-semibold text-white">{name}</h3>
			</div>
		</div>
	);
};
