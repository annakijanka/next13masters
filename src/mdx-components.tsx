import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: ({ children }) => (
			<h1 className="text-steel-gray mb-4 text-2xl font-extrabold tracking-tight md:text-3xl">
				{children}
			</h1>
		),
		p: ({ children }) => <p className="text-steel-gray">{children}</p>,
		...components,
	};
}
