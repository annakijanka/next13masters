import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export const ProductColorVariants = ({
	variantsForTargetProduct,
	selectedVariant,
}: {
	variantsForTargetProduct: string[];
	selectedVariant: string | undefined;
}) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	return (
		<div>
			<h3 className="font-semibold text-steel-gray">Color Variants</h3>
			<div>
				{variantsForTargetProduct.map((variant) => (
					<Link
						className="m-1 inline-block first:ml-0 last:mr-0"
						key={variant}
						href={{
							pathname: pathname,
							query: { ...Object.fromEntries(searchParams), color: variant },
						}}
					>
						<label>
							<input
								type="radio"
								name="color"
								value={variant}
								checked={selectedVariant === variant}
								className="sr-only"
								readOnly
							/>
							<span
								className="block h-6 w-6 cursor-pointer rounded-full border-2"
								style={{
									borderColor: selectedVariant === variant ? "rgb(242, 239, 234)" : variant,
									backgroundColor: variant,
								}}
							></span>
						</label>
					</Link>
				))}
			</div>
		</div>
	);
};
