"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import { type Route } from "next";

export const ProductColorVariants = ({
	colorsForTargetProduct,
}: {
	colorsForTargetProduct: string[];
}) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const router = useRouter();
	const colorQueryParam = searchParams.get("color");

	const selectedColor =
		colorQueryParam && colorsForTargetProduct.includes(colorQueryParam)
			? colorQueryParam
			: colorsForTargetProduct[0];

	useEffect(() => {
		if (!colorQueryParam || !colorsForTargetProduct.includes(colorQueryParam)) {
			const newPath = `${pathname}?color=${selectedColor}` as Route;
			router.replace(newPath, { scroll: false });
		}
	}, [colorQueryParam, selectedColor, router, colorsForTargetProduct, pathname]);

	return (
		<div>
			<h3 className="font-semibold text-steel-gray">Color Variants</h3>
			<div>
				{colorsForTargetProduct.map((color) => (
					<Link
						className="m-1 inline-block first:ml-0 last:mr-0"
						key={color}
						href={{
							pathname: pathname,
							query: { color: color },
						}}
					>
						<label>
							<input
								type="radio"
								name="color"
								value={color}
								checked={selectedColor === color}
								className="sr-only"
							/>
							<span
								className="block h-6 w-6 cursor-pointer rounded-full border-2"
								style={{
									borderColor: selectedColor === color ? "rgb(242, 239, 234)" : color,
									backgroundColor: color,
								}}
							></span>
						</label>
					</Link>
				))}
			</div>
		</div>
	);
};
