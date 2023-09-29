"use client";

import { useState } from "react";

export const ProductColorVariants = ({
	colorsForTargetProduct,
}: {
	colorsForTargetProduct: string[];
}) => {
	const [selectedColor, setSelectedColor] = useState(colorsForTargetProduct[0]);

	const handleColorChange = (color: string) => {
		setSelectedColor(color);
	};

	return (
		<div>
			<h3 className="font-semibold text-steel-gray">Color Variants</h3>
			<div>
				{colorsForTargetProduct.map((color) => (
					<label key={color} className="m-1 inline-block first:ml-0 last:mr-0">
						<input
							type="radio"
							name="color"
							value={color}
							checked={selectedColor === color}
							onChange={() => handleColorChange(color)}
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
				))}
			</div>
		</div>
	);
};
