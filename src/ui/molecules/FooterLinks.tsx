import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const FooterLinks = () => {
	return (
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
	);
};
