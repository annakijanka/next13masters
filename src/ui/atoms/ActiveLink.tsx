"use client";

import clsx from "clsx";
import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
	let isActive = false;

	if (exact) {
		isActive = pathname === href;
	} else {
		isActive = pathname.startsWith(href);
	}

	return (
		<Link
			className={clsx({ [className || ""]: !isActive, [activeClassName]: isActive })}
			href={href}
		>
			{children}
		</Link>
	);
};
