import Link from "next/link";
import { ProductThumbnail } from "@/ui/atoms/ProductThumbnail";
import { ProductDescription } from "@/ui/atoms/ProductDescription";
import { type ProductFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductFragment;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductThumbnail
						src={product.images[0]?.url}
						alt={product.name}
						hasAnimation={true}
						width={280}
						height={280}
					/>
					<ProductDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
