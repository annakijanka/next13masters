import Link from "next/link";
import { type Product } from "@/ui/types";
import { ProductThumbnail } from "@/ui/atoms/ProductThumbnail";
import { ProductDescription } from "@/ui/atoms/ProductDescription";

type ProductListItemProps = {
	product: Product;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	const href = {
		pathname: `/products/${product.id}`,
	};
	return (
		<li>
			<Link href={href}>
				<article>
					<ProductThumbnail {...product.thumbnail} />
					<ProductDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
