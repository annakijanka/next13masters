import { type Route } from "next";
import { type NavLink } from "@/ui/types";
import { getCategories } from "@/api/categories";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const CategoryLinks = async () => {
	const categories = await getCategories();
	const baseLinks: NavLink[] = [
		{ href: "/", text: "Home", exact: true },
		{ href: "/products", text: "All" },
	];
	const categoryLinks: NavLink[] = categories.map((category) => ({
		href: `/categories/${category.slug}`,
		text: category.name,
	}));
	const links: NavLink[] = [...baseLinks, ...categoryLinks];

	return (
		<ul className="flex h-12 max-w-full space-x-8 whitespace-nowrap lg:h-16 lg:px-8">
			{links.map((link, index) => (
				<li
					key={index}
					className={`${index === 0 ? "pl-4 " : ""}${
						index === links.length - 1 ? "pr-4 " : ""
					}lg:px-0`}
				>
					<ActiveLink
						className="hover:border-brick-red flex h-full w-full min-w-[3rem] items-center justify-center border-b-4 border-transparent px-1 pt-1 text-center text-sm font-medium text-steel-gray"
						activeClassName="flex h-full w-full min-w-[3rem] items-center justify-center border-b-4 px-1 pt-1 text-center text-sm font-medium text-steel-gray hover:border-brick-red border-java"
						href={link.href as Route}
						exact={link.exact}
					>
						{link.text}
					</ActiveLink>
				</li>
			))}
		</ul>
	);
};
