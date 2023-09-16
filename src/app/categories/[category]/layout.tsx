export const generateStaticParams = async () => {
	return [{ category: "dresses" }, { category: "jackets" }, { category: "shoes" }];
};

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
	return children;
}
