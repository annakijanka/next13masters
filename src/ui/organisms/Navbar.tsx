import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import NextImage from "next/image";
import { Suspense } from "react";
import { CategoryLinks } from "./CategoryLinks";
import { SearchBar } from "@/ui/molecules/SearchBar";
import Logotype from "pub/logotype.png";
import { Loading } from "@/ui/atoms/Loading";
import { getCartByIdFromCookies } from "@/helpers";

export const Navbar = async () => {
	const cart = await getCartByIdFromCookies();
	const count = cart?.orderItems.length || 0;
	return (
		<>
			<nav className="flex h-12 overflow-x-scroll lg:mx-0 lg:h-16 lg:overflow-x-auto">
				<div className="hidden items-center sm:flex">
					<NextImage
						className="transition-transform duration-300 hover:rotate-12"
						src={Logotype}
						alt="Logotype"
						width="32"
						height="32"
					/>
				</div>
				<Suspense fallback={<Loading />}>
					<CategoryLinks />
				</Suspense>
			</nav>
			<div className="flex h-12 flex-1 items-center lg:ml-6 lg:h-16 lg:justify-end">
				<div className="w-full max-w-lg lg:max-w-xs">
					<SearchBar />
				</div>
				<div className="ml-auto h-12 lg:ml-4 lg:h-16">
					<Link
						href="/cart"
						className="flex h-full w-16 items-center justify-center border-b-4 border-transparent px-2 text-center text-sm font-medium text-steel-gray hover:border-brick-red"
					>
						<ShoppingCart />
						<div className="w-4">
							<span className="ml-2 text-sm font-medium">{count}</span>
							<span className="sr-only">items in your cart, view</span>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};
