"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { type Route } from "next";
import { ProductColorVariants } from "./ProductColorVariants";
import { ProductSizeVariants } from "./ProductSizeVariants";

export const ProductVariants = ({
	variantsForTargetProduct,
	variantType,
}: {
	variantsForTargetProduct: string[];
	variantType: string;
}) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const router = useRouter();
	const variantQueryParam = searchParams.get(variantType);

	const selectedVariant =
		variantQueryParam && variantsForTargetProduct.includes(variantQueryParam)
			? variantQueryParam
			: variantsForTargetProduct[0];

	useEffect(() => {
		const currentSearchParams = new URLSearchParams(searchParams.toString());
		if (
			(!variantQueryParam || !variantsForTargetProduct.includes(variantQueryParam)) &&
			selectedVariant
		) {
			currentSearchParams.set(variantType, selectedVariant);
			const newPath = `${pathname}?${currentSearchParams.toString()}` as Route;
			router.replace(newPath, { scroll: false });
		}
	}, [
		variantQueryParam,
		selectedVariant,
		router,
		variantsForTargetProduct,
		pathname,
		variantType,
		searchParams,
	]);

	return variantType === "color" ? (
		<ProductColorVariants
			variantsForTargetProduct={variantsForTargetProduct}
			selectedVariant={selectedVariant}
		/>
	) : variantType === "size" ? (
		<ProductSizeVariants
			variantsForTargetProduct={variantsForTargetProduct}
			selectedVariant={selectedVariant}
		/>
	) : null;
};
