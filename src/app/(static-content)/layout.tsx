export default function staticContentLayout({ children }: { children: React.ReactNode }) {
	return <div className="mx-auto max-w-3xl">{children}</div>;
}
