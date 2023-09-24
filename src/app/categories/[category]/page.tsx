import { redirect } from "next/navigation";

export default function Category({ params }: { params: { category: string } }) {
	redirect(`/categories/${params.category}/1`);
}
