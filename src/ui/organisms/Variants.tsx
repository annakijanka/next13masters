import { getColorAndSizeVariants, getColorVariants, getSizeVariants } from "@/helpers";
import { ProductVariants } from "@/ui/molecules/ProductVariants";

export const Variants = async ({ productId }: { productId: string }) => {
	const { colors: combinedColors, sizes: combinedSizes } = await getColorAndSizeVariants(productId);

	let colorsForTargetProduct, sizesForTargetProduct;

	if (combinedColors.length > 0 && combinedSizes.length > 0) {
		colorsForTargetProduct = combinedColors;
		sizesForTargetProduct = combinedSizes;
	} else {
		colorsForTargetProduct = await getColorVariants(productId);
		sizesForTargetProduct = await getSizeVariants(productId);
	}

	return (
		<div className="mt-4 space-y-6">
			<div className="grid grid-cols-2 gap-8">
				{colorsForTargetProduct.length > 0 && (
					<ProductVariants variantsForTargetProduct={colorsForTargetProduct} variantType="color" />
				)}
				{sizesForTargetProduct.length > 0 && (
					<ProductVariants variantsForTargetProduct={sizesForTargetProduct} variantType="size" />
				)}
			</div>
		</div>
	);
};
