import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { getTotalProductCount } from "@/api/products";

export const Pagination = async ({
	currentPage,
	perPage,
}: {
	currentPage: string;
	perPage: number;
}) => {
	const totalCount = await getTotalProductCount();
	const totalPages = Math.ceil(totalCount / perPage);
	const current = parseInt(currentPage, 10);
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
								<span className="flex h-10 w-10 items-center justify-center text-sm font-medium text-white">
									...
								</span>
							</li>
						);
					}
					return (
						<li key={page}>
							<ActiveLink
								href={`/products/${page}` as Route}
								activeClassName="flex items-center rounded-lg text-sm font-medium justify-center h-10 w-10 text-white bg-heliotrope"
								className="hover:bg-dodger-blue flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium text-white transition-colors duration-150"
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
