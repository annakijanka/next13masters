import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Navbar } from "@/ui/organisms/Navbar";

const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
	variable: "--font-roboto",
});

export const metadata: Metadata = {
	title: "Homepage | Online Store",
	description: "Welcome to your one-stop shop for quality and savings.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const currentYear = new Date().getFullYear();
	return (
		<html className={`${roboto.variable} overflow-x-hidden`} lang="en">
			<body className="flex min-h-screen flex-col overflow-x-hidden bg-port-gore">
				<header className="sticky top-0 z-20 bg-port-gore bg-opacity-95 backdrop-blur">
					<div className="mx-auto max-w-7xl px-4 lg:px-8">
						<div className="flex flex-col justify-between lg:flex-row lg:items-center">
							<Navbar />
						</div>
					</div>
				</header>
				<section className="mx-auto flex w-full max-w-2xl flex-grow flex-col px-4 py-8 sm:py-12 lg:max-w-7xl lg:px-8">
					{children}
				</section>
				<footer className="relative">
					<svg
						className="absolute bottom-0 left-0 -z-[1] min-w-[1920px] -translate-x-0 fill-dodger-blue sm:left-1/2 sm:-translate-x-1/2"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320"
						preserveAspectRatio="none"
					>
						<path d="m0 128 60-16c60-16 180-48 300-16s240 128 360 154.7c120 26.3 240-15.7 360-32 120-15.7 240-5.7 300 0l60 5.3v96H0Z" />
					</svg>
					<div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
						<nav aria-label="Footer">
							<h3 className="font-semibold text-port-gore">Legal Information</h3>
							<ul className="mt-2">
								<li>
									<a
										className="text-sm leading-6 text-port-gore hover:text-white"
										href="/privacy-policy"
									>
										Privacy Policy
									</a>
								</li>
								<li>
									<a
										className="text-sm leading-6 text-port-gore hover:text-white"
										href="/terms-of-service"
									>
										Terms of Service
									</a>
								</li>
								<li>
									<a
										className="text-sm leading-6 text-port-gore hover:text-white"
										href="/return-policy"
									>
										Return Policy
									</a>
								</li>
							</ul>
						</nav>
						<p className="mt-4 text-sm leading-7 text-port-gore">© {currentYear} Anna Kijanka</p>
					</div>
				</footer>
			</body>
		</html>
	);
}
