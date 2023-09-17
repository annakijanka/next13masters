import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: ({ children }) => (
			<h1 className="mb-4 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
				{children}
			</h1>
		),
		...components,
	};
}
