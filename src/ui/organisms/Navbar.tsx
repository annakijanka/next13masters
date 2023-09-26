import { type Route } from "next";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { type NavLink } from "@/ui/types";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { getCategories } from "@/api/categories";

export const Navbar = async () => {
	const categories = await getCategories();
	const baseLinks: NavLink[] = [
		{ href: "/", text: "Home", exact: true },
		{ href: "/products", text: "All" },
	];
	const categoryLinks: NavLink[] = categories.map((category) => ({
		href: `/categories/${category.name.toLowerCase()}`,
		text: category.name,
	}));
	const links: NavLink[] = [...baseLinks, ...categoryLinks];

	return (
		<>
			<nav className="flex h-12 overflow-x-scroll lg:mx-0 lg:h-16 lg:overflow-x-auto">
				<div className="hidden items-center sm:flex">
					<img src="/logotype.png" alt="Logotype" width="64" height="auto" />
				</div>
				<ul className="flex h-12 max-w-full space-x-8 whitespace-nowrap lg:h-16 lg:px-8">
					{links.map((link, index) => (
						<li
							key={index}
							className={`${index === 0 ? "pl-4 " : ""}${
								index === links.length - 1 ? "pr-4 " : ""
							}lg:px-0`}
						>
							<ActiveLink
								className="flex h-full w-full min-w-[3rem] items-center justify-center border-b-4 border-transparent px-1 pt-1 text-center text-sm font-medium text-white hover:border-dodger-blue"
								activeClassName="flex h-full w-full min-w-[3rem] items-center justify-center border-b-4 px-1 pt-1 text-center text-sm font-medium text-white hover:border-dodger-blue border-heliotrope"
								href={link.href as Route}
								exact={link.exact}
							>
								{link.text}
							</ActiveLink>
						</li>
					))}
				</ul>
			</nav>
			<div className="flex h-12 flex-1 items-center lg:ml-6 lg:h-16 lg:justify-end">
				<div className="ml-auto h-12 lg:ml-4 lg:h-16">
					<Link
						href="/cart"
						className="flex h-full w-16 items-center justify-center border-b-4 border-transparent px-2 text-center text-sm font-medium text-white hover:border-dodger-blue"
					>
						<ShoppingCart />
						<div className="w-4">
							<span className="ml-2 text-sm font-medium">0</span>
							<span className="sr-only">items in your cart, view</span>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};
