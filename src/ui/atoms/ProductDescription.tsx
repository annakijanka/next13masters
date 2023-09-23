import { type Product } from "@/ui/types";
import { formatCurrency } from "@/utils";

type ProductDescriptionProps = {
	product: Product;
};

export const ProductDescription = ({
	product: { name, category, price },
}: ProductDescriptionProps) => {
	return (
		<div className="mt-2">
			<div className="flex flex-row justify-between">
				<h3 className="font-semibold text-white">{name}</h3>
				<div>
					{category &&
						Array.isArray(category) &&
						category.map((cat, index) => (
							<p key={index} className="text-sm text-white opacity-70">
								{cat}
							</p>
						))}
				</div>
			</div>
			<p className="small-caps text-sm font-medium text-white opacity-80">
				{formatCurrency(price)}
			</p>
		</div>
	);
};
