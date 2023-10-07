import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export const ProductSizeVariants = ({
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
			<h3 className="font-semibold text-steel-gray">Size Variants</h3>
			<div>
				{variantsForTargetProduct.map((variant) => (
					<Link
						className="m-1 inline-block first:ml-0 last:mr-0"
						key={variant}
						href={{
							pathname: pathname,
							query: { ...Object.fromEntries(searchParams), size: variant },
						}}
					>
						<label>
							<input
								type="radio"
								name="size"
								value={variant}
								checked={selectedVariant === variant}
								className="sr-only"
								readOnly
							/>
							<span
								className="mr-1 inline-block cursor-pointer rounded bg-bridal-heath px-2 py-1 text-xs font-semibold uppercase text-steel-gray last:mr-0"
								style={{
									backgroundColor: selectedVariant === variant ? "rgb(64, 61, 88)" : "",
									color: selectedVariant === variant ? "rgb(255, 252, 247)" : "",
								}}
							>
								{variant}
							</span>
						</label>
					</Link>
				))}
			</div>
		</div>
	);
};
