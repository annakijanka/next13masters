"use client";

import clsx from "clsx";
import { type Route } from "next";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export const ActiveLink = <T extends Route>({
	className,
	activeClassName,
	href,
	exact = false,
	children,
}: {
	className?: string;
	activeClassName: string;
	href: T;
	exact?: boolean;
	children: React.ReactNode;
}) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const searchTerm = searchParams.get("query") || searchParams.get("sort");
	const fullRoute = `${pathname}${
		searchTerm
			? `?${searchTerm === searchParams.get("query") ? "query" : "sort"}=` +
			  encodeURIComponent(searchTerm)
			: ""
	}`;
	let isActive = false;

	if (exact) {
		isActive = fullRoute === href;
	} else {
		isActive = fullRoute.startsWith(href);
	}

	return (
		<Link
			className={clsx({ [className || ""]: !isActive, [activeClassName]: isActive })}
			href={href}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
};
