import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Homepage | Online Store",
	description: "Welcome to your one-stop shop for quality and savings.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				<header className="sticky top-0 z-20 border-b bg-white bg-opacity-60 backdrop-blur-lg">
					<div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
						<div className="flex flex-col justify-between gap-y-4 pb-4 lg:flex-row lg:items-center lg:pb-0">
							<nav className="-mx-2 flex overflow-x-scroll lg:mx-0 lg:h-16 lg:overflow-x-auto">
								<ul className="flex h-16 max-w-full space-x-8 whitespace-nowrap lg:px-8">
									<li className="first:pl-4 last:pr-4 lg:px-0">
										<ActiveLink
											className="flex h-full w-full min-w-[3rem] items-center justify-center border-b-2 border-transparent px-1 pt-1 text-center text-sm font-medium text-slate-500 hover:border-gray-300 hover:text-slate-700"
											activeClassName="flex h-full w-full min-w-[3rem] items-center justify-center border-b-2 px-1 pt-1 text-center text-sm font-medium text-slate-500 hover:border-gray-300 hover:text-slate-700 border-blue-500"
											href="/"
											exact={true}
										>
											Home
										</ActiveLink>
									</li>
									<li className="first:pl-4 last:pr-4 lg:px-0">
										<ActiveLink
											className="flex h-full w-full min-w-[3rem] items-center justify-center border-b-2 border-transparent px-1 pt-1 text-center text-sm font-medium text-slate-500 hover:border-gray-300 hover:text-slate-700"
											activeClassName="flex h-full w-full min-w-[3rem] items-center justify-center border-b-2 px-1 pt-1 text-center text-sm font-medium text-slate-500 hover:border-gray-300 hover:text-slate-700 border-blue-500"
											href="/products"
										>
											All
										</ActiveLink>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</header>
				<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
					{children}
				</section>
				<footer className="border-t bg-slate-50">
					<div className="mx-auto max-w-7xl px-6 py-8">
						<nav className="text-center" aria-label="Footer">
							<a className="text-sm leading-6 text-blue-500 hover:text-blue-700" href="/terms">
								Terms
							</a>
						</nav>
						<p className="mt-2 text-center text-xs leading-7 text-slate-500">
							© 2023 Anna Kijanka
						</p>
					</div>
				</footer>
			</body>
		</html>
	);
}
