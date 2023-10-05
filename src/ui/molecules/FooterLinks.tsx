import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const FooterLinks = () => {
	return (
		<ul className="mt-2">
			<li>
				<ActiveLink
					className="hover:text-java text-sm leading-6 text-pampas"
					activeClassName="text-sm leading-6 text-java"
					href={`/privacy-policy` as Route}
				>
					Privacy Policy
				</ActiveLink>
			</li>
			<li>
				<ActiveLink
					className="hover:text-java text-sm leading-6 text-pampas"
					activeClassName="text-sm leading-6 text-java"
					href={`/terms-of-service` as Route}
				>
					Terms of Service
				</ActiveLink>
			</li>
			<li>
				<ActiveLink
					className="hover:text-java text-sm leading-6 text-pampas"
					activeClassName="text-sm leading-6 text-java"
					href={`/return-policy` as Route}
				>
					Return Policy
				</ActiveLink>
			</li>
		</ul>
	);
};
