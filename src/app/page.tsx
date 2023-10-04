import { Suspense } from "react";
import { Loading } from "@/ui/atoms/Loading";
import { HomeProductList } from "@/ui/organisms/HomeProductList";
import { CollectionList } from "@/ui/organisms/CollectionList";

export default function Home() {
	return (
		<>
			<section>
				<CollectionList />
			</section>
			<Suspense fallback={<Loading />}>
				<aside>
					<div className="pb-16">
						<HomeProductList />
					</div>
				</aside>
			</Suspense>
		</>
	);
}
