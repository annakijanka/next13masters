import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import NextImage from "next/image";
import Dummy from "pub/dummy.png";

export const CollectionThumbnail = ({
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
			className={`w-full overflow-hidden rounded-lg shadow-md bg-bridal-heath${
				hasAnimation ? " transition-transform duration-300 hover:scale-[1.02]" : ""
			}`}
		>
			<NextImage className="max-h-full max-w-full" src={src} alt={alt} width={640} height={432} />
		</div>
	);
};
