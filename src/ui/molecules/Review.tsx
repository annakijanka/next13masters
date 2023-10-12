import { Rating } from "@/ui/atoms/Rating";
import { type ReviewFragment } from "@/gql/graphql";

export const Review = ({ review }: { review: ReviewFragment }) => {
	return (
		<>
			<h3 className="text-base font-bold">{review.headline}</h3>
			<p>{review.content}</p>
			<div className="my-1">{review.rating && <Rating rating={review.rating} />}</div>
			<p>
				<span className="font-semibold">Reviewed by:</span> {review.name}
			</p>
			<p className="italic">{review.email}</p>
		</>
	);
};
