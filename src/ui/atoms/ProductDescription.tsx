import { type ProductFragment } from "@/gql/graphql";
import { formatCurrency } from "@/utils";

type ProductDescriptionProps = {
	product: ProductFragment;
};

export const ProductDescription = ({
	product: { name, categories, price },
}: ProductDescriptionProps) => {
	return (
		<div className="mt-2">
			<div className="flex flex-row justify-between">
				<h3 className="font-semibold text-white">{name}</h3>
				{categories[0] && <p className="text-sm text-white opacity-70">{categories[0].name}</p>}
			</div>
			<p className="small-caps text-sm font-medium text-white opacity-80">
				{formatCurrency(price)}
			</p>
		</div>
	);
};
