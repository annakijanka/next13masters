import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Suspense } from "react";
import { Navbar } from "@/ui/organisms/Navbar";
import { FooterLinks } from "@/ui/molecules/FooterLinks";
import { Loading } from "@/ui/atoms/Loading";
import { currentYear } from "@/utils";

const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
	variable: "--font-roboto",
});

export const metadata: Metadata = {
	title: "Home | Online Store",
	description: "Welcome to your one-stop shop for quality and savings.",
};

export default function RootLayout({
	children,
	modal,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
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
							<Navbar />
						</div>
					</div>
				</header>
				<section className="mx-auto flex w-full max-w-2xl flex-grow flex-col px-4 py-8 sm:py-20 lg:max-w-7xl lg:px-8">
					{children}
				</section>
				<footer className="relative mt-20 sm:mt-0">
					<svg
						className="absolute bottom-0 left-0 -z-[1] min-w-[1920px] -translate-x-0 fill-gun-powder sm:left-1/2 sm:-translate-x-1/2"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320"
						preserveAspectRatio="none"
					>
						<path d="m0 128 60-16c60-16 180-48 300-16s240 128 360 154.7c120 26.3 240-15.7 360-32 120-15.7 240-5.7 300 0l60 5.3v96H0Z" />
					</svg>
					<div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
						<nav aria-label="Footer">
							<h3 className="font-semibold text-pampas">Legal Information</h3>
							<Suspense fallback={<Loading />}>
								<FooterLinks />
							</Suspense>
						</nav>
						<p className="mt-4 text-sm leading-7 text-pampas">© {currentYear()} Anna Kijanka</p>
					</div>
				</footer>
				{modal}
			</body>
		</html>
	);
}
