import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Pagination = async ({
	currentPage,
	perPage,
	totalCount,
	path,
	query = "",
}: {
	currentPage: string;
	perPage: number;
	totalCount: number;
	path: string;
	query?: string;
}) => {
	const totalPages = Math.ceil(totalCount / perPage);
	const current = parseInt(currentPage, 10);

	if (totalPages < current) {
		return;
	}

	let pages: (number | string)[] = [];

	if (totalPages <= 11) {
		pages = Array.from({ length: totalPages }, (_, index) => index + 1);
	} else if (current <= 7) {
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
		<nav className="mt-auto flex items-center justify-center px-4" aria-label="Pagination">
			<ul className="inline-flex">
				{pages.map((page, index) => {
					if (page === "...") {
						return (
							<li key={index}>
								<span className="flex h-8 w-8 items-center justify-center text-sm font-medium text-steel-gray sm:h-10 sm:w-10">
									...
								</span>
							</li>
						);
					}
					return (
						<li key={page}>
							<ActiveLink
								href={`/${path}/${page}${query}` as Route}
								activeClassName="flex items-center rounded-lg text-sm font-medium justify-center sm:h-10 sm:w-10 h-8 w-8 text-white bg-java"
								className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium text-steel-gray transition-colors duration-300 hover:bg-gun-powder hover:text-white sm:h-10 sm:w-10"
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
