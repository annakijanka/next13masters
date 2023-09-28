import Link from "next/link";
import { type ProductAverageRating } from "../types";
import { ProductThumbnail } from "@/ui/atoms/ProductThumbnail";
import { ProductDescription } from "@/ui/atoms/ProductDescription";
import { type ProductFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductFragment | ProductAverageRating;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductThumbnail src={product.images[0]?.url} alt={product.name} hasAnimation={true} />
					<ProductDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
