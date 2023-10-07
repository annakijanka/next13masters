export default function StaticContentLayout({ children }: { children: React.ReactNode }) {
	return <div className="prose mx-auto max-w-3xl">{children}</div>;
}
