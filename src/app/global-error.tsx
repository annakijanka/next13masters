"use client";

import { Roboto } from "next/font/google";
import { useEffect } from "react";
import NextImage from "next/image";
import Link from "next/link";
import { currentYear } from "@/utils";
import Logotype from "pub/logotype.png";

const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
	variable: "--font-roboto",
});

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<html className={`${roboto.variable} overflow-x-hidden`} lang="en">
			<body className="flex min-h-screen flex-col overflow-x-hidden bg-pampas">
				<header className="bg-bridal-heath pb-2 lg:bg-transparent lg:pb-0">
					<svg
						className="absolute left-0 top-0 -z-[1] hidden min-w-[1920px] -translate-x-0 fill-bridal-heath sm:left-1/2 sm:-translate-x-1/2 lg:block"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320"
						preserveAspectRatio="none"
					>
						<path d="m0 58 60 3.5c60 3.5 180 10.5 300 8s240-14.5 360-11S960 81 1080 87.8c120 6.9 240 1.5 300-1.1l60-2.7V0H0Z" />
					</svg>
					<div className="mx-auto max-w-7xl px-4 lg:px-8">
						<div className="flex flex-col justify-between lg:flex-row lg:items-center">
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
								<ul className="flex h-12 max-w-full space-x-8 whitespace-nowrap lg:h-16 lg:px-8">
									<li className="pl-4 lg:px-0">
										<Link
											className="flex h-full w-full min-w-[3rem] items-center justify-center border-b-4 border-transparent px-1 pt-1 text-center text-sm font-medium text-steel-gray hover:border-brick-red"
											href="/"
										>
											Home
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</header>
				<section className="mx-auto flex w-full max-w-2xl flex-grow flex-col px-4 py-8 sm:py-20 lg:max-w-7xl lg:px-8">
					<div className="mx-auto w-full max-w-3xl">
						<h1 className="mb-4 text-2xl font-extrabold tracking-tight text-steel-gray md:text-3xl">
							Something went wrong!
						</h1>
						<button
							className="inline-flex h-14 w-auto items-center justify-center rounded-lg from-gun-powder from-10% via-brick-red via-50% to-java to-90% px-6 text-base font-bold leading-6 text-bridal-heath transition-transform duration-300 hover:scale-[1.04] enabled:bg-gradient-to-r disabled:cursor-wait disabled:bg-gun-powder disabled:bg-opacity-25"
							onClick={() => reset()}
						>
							Try again
						</button>
					</div>
				</section>
				<footer className="relative">
					<svg
						className="absolute bottom-0 left-0 -z-[1] min-w-[1920px] -translate-x-0 fill-gun-powder sm:left-1/2 sm:-translate-x-1/2"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320"
						preserveAspectRatio="none"
					>
						<path d="m0 128 60-16c60-16 180-48 300-16s240 128 360 154.7c120 26.3 240-15.7 360-32 120-15.7 240-5.7 300 0l60 5.3v96H0Z" />
					</svg>
					<div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
						<p className="mt-4 text-sm leading-7 text-pampas">© {currentYear()} Anna Kijanka</p>
					</div>
				</footer>
			</body>
		</html>
	);
}
