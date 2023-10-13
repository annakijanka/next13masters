import { Rating } from "./Rating";
import { type ProductAverageRating } from "@/ui/types";
import { type ProductFragment } from "@/gql/graphql";
import { formatCurrency } from "@/utils";

type ProductDescriptionProps = {
	product: ProductFragment | ProductAverageRating;
};

export const ProductDescription = ({ product }: ProductDescriptionProps) => {
	const isAverageRatingProduct = (
		product: ProductFragment | ProductAverageRating,
	): product is ProductAverageRating => {
		return "averageRating" in product;
	};
	return (
		<div className="mt-2">
			<div className="flex flex-row justify-between">
				<h3 className="font-semibold text-steel-gray">{product.name}</h3>
				{product.categories[0] && (
					<p className="text-sm text-steel-gray opacity-70">{product.categories[0].name}</p>
				)}
			</div>
			<div className="flex flex-row justify-between">
				<p
					className="small-caps text-sm font-medium text-steel-gray opacity-80"
					data-testid="product-price"
				>
					{formatCurrency(product.price)}
				</p>
				<p className="small-caps text-sm font-medium text-steel-gray">
					{isAverageRatingProduct(product) && product.averageRating > 0 && (
						<Rating rating={product.averageRating} />
					)}
				</p>
			</div>
		</div>
	);
};
