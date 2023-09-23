export const ProductThumbnail = ({
	src,
	alt,
	hasAnimation = false,
}: {
	src: string;
	alt: string;
	hasAnimation?: boolean;
}) => {
	if (!src) {
		src = "/dummy.png";
	}
	return (
		<div
			className={`relative w-full rounded-lg bg-white pt-[100%]${
				hasAnimation ? " transition-transform duration-150 hover:scale-[1.02]" : ""
			}`}
		>
			<img
				className="absolute left-1/2 top-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2 object-contain p-2"
				src={src}
				alt={alt}
				width={640}
				height={640}
			/>
		</div>
	);
};
