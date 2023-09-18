import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { getTotalProductCount } from "@/api/products";

export const Pagination = async ({ currentPage }: { currentPage: string }) => {
	const totalCount = await getTotalProductCount();
	const take = 20;
	const totalPages = Math.ceil(totalCount / take);
	const current = parseInt(currentPage, 10);
	let pages: (number | string)[] = [];

	if (current <= 7) {
		pages = [1, 2, 3, 4, 5, 6, 7, 8, "...", totalPages - 2, totalPages - 1, totalPages];
	} else if (current > 7 && current < totalPages - 6) {
		pages = [
			1,
			2,
			3,
			"...",
			current - 3,
			current - 2,
			current - 1,
			current,
			current + 1,
			current + 2,
			current + 3,
			"...",
			totalPages - 2,
			totalPages - 1,
			totalPages,
		];
	} else if (current >= totalPages - 6) {
		pages = [
			1,
			2,
			3,
			"...",
			totalPages - 7,
			totalPages - 6,
			totalPages - 5,
			totalPages - 4,
			totalPages - 3,
			totalPages - 2,
			totalPages - 1,
			totalPages,
		];
	}

	return (
		<nav className="mt-auto flex items-center justify-center border-t border-slate-200 px-4">
			<ul className="-mt-px flex">
				{pages.map((page, index) => {
					if (page === "...") {
						return (
							<li key={index}>
								<span className="inline-flex items-center border-t-2 px-0.5 pt-0.5 text-xs font-medium md:px-4 md:pt-4 md:text-sm">
									...
								</span>
							</li>
						);
					}
					return (
						<li key={page}>
							<ActiveLink
								href={`/products/${page}` as Route}
								activeClassName="inline-flex items-center border-t-2 px-0.5 md:px-4 pt-0.5 md:pt-4 text-xs md:text-sm font-medium border-blue-500 text-blue-600"
								className="inline-flex items-center border-t-2 px-0.5 pt-0.5 text-xs font-medium md:px-4 md:pt-4 md:text-sm"
								exact={true}
							>
								{page}
							</ActiveLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
