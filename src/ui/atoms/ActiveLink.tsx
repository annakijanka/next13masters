"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const ActiveLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<Link
			className={clsx(
				"flex h-full w-full min-w-[3rem] items-center justify-center border-b-2 border-transparent px-1 pt-1 text-center text-sm font-medium text-slate-500 hover:border-gray-300 hover:text-slate-700",
				{ "border-blue-500": isActive },
			)}
			href={href}
		>
			{children}
		</Link>
	);
};
