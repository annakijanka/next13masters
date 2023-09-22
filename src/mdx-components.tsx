import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: ({ children }) => (
			<h1 className="mb-4 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
				{children}
			</h1>
		),
		p: ({ children }) => <p className="text-white">{children}</p>,
		...components,
	};
}
