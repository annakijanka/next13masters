import { type Product } from "@/ui/types";
import { ProductThumbnail } from "@/ui/atoms/ProductThumbnail";
import { ProductDescription } from "@/ui/atoms/ProductDescription";

type ProductListItemProps = {
	product: Product;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<article>
				<ProductThumbnail {...product.thumbnail} />
				<ProductDescription product={product} />
			</article>
		</li>
	);
};
