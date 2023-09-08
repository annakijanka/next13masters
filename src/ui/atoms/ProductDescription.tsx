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
				<h3 className="text-sm font-semibold text-slate-700">{name}</h3>
				<p className="text-sm text-slate-500">{category}</p>
			</div>
			<p className="small-caps text-sm font-medium text-slate-900">{formatCurrency(price)}</p>
		</div>
	);
};
