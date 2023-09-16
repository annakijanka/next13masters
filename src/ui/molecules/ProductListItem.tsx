import Link from "next/link";
import { type Product } from "@/ui/types";
import { ProductThumbnail } from "@/ui/atoms/ProductThumbnail";
import { ProductDescription } from "@/ui/atoms/ProductDescription";

type ProductListItemProps = {
	product: Product;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/products/${product.id}`}>
				<article>
					<ProductThumbnail {...product.thumbnail} />
					<ProductDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
