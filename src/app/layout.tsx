import "./globals.css";
import type { Metadata, Route } from "next";
import { Roboto } from "next/font/google";
import { Navbar } from "@/ui/organisms/Navbar";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

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
			<body className="flex min-h-screen flex-col overflow-x-hidden bg-pampas">
				<header>
					<svg
						className="fill-bridal-heath absolute left-0 top-0 -z-[1] min-w-[1920px] -translate-x-0 sm:left-1/2 sm:-translate-x-1/2"
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
						<nav aria-label="Footer">
							<h3 className="font-semibold text-pampas">Legal Information</h3>
							<ul className="mt-2">
								<li>
									<ActiveLink
										className="text-sm leading-6 text-pampas hover:text-viking"
										activeClassName="text-sm leading-6 text-viking"
										href={`/privacy-policy` as Route}
									>
										Privacy Policy
									</ActiveLink>
								</li>
								<li>
									<ActiveLink
										className="text-sm leading-6 text-pampas hover:text-viking"
										activeClassName="text-sm leading-6 text-viking"
										href={`/terms-of-service` as Route}
									>
										Terms of Service
									</ActiveLink>
								</li>
								<li>
									<ActiveLink
										className="text-sm leading-6 text-pampas hover:text-viking"
										activeClassName="text-sm leading-6 text-viking"
										href={`/return-policy` as Route}
									>
										Return Policy
									</ActiveLink>
								</li>
							</ul>
						</nav>
						<p className="mt-4 text-sm leading-7 text-pampas">© {currentYear} Anna Kijanka</p>
					</div>
				</footer>
			</body>
		</html>
	);
}
