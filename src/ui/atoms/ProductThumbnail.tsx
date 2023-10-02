import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import NextImage from "next/image";
import Dummy from "pub/dummy.png";

export const ProductThumbnail = ({
	src,
	alt,
	hasAnimation = false,
}: {
	src?: string | StaticImport;
	alt: string;
	hasAnimation?: boolean;
}) => {
	if (!src) {
		src = Dummy;
	}
	return (
		<div
			className={`relative w-full overflow-hidden rounded-lg bg-bridal-heath shadow-md pt-[100%]${
				hasAnimation ? " transition-transform duration-300 hover:scale-[1.02]" : ""
			}`}
		>
			<NextImage
				className="absolute left-1/2 top-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2 object-contain"
				src={src}
				alt={alt}
				width={640}
				height={640}
			/>
		</div>
	);
};
