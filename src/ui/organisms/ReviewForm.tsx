"use client";

import { experimental_useOptimistic as useOptimistic } from "react";
import { submitReview } from "@/api/reviews";
import { type ReviewFragment } from "@/gql/graphql";

export const ReviewForm = ({ productId }: { productId: string }) => {
	const updateReviews = (reviews: ReviewFragment[], newReview: ReviewFragment) => [
		...reviews,
		newReview,
	];
	const [optimisticReviews, addOptimisticReview] = useOptimistic([], updateReviews);

	const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const newReview = {
			headline: formData.get("headline")?.toString() || "",
			content: formData.get("content")?.toString() || "",
			rating: parseInt(formData.get("rating")?.toString() || "0", 10),
			name: formData.get("name")?.toString() || "",
			email: formData.get("email")?.toString() || "",
		};
		addReview(newReview);
		await submitReview(
			newReview.headline,
			newReview.content,
			newReview.rating,
			newReview.name,
			newReview.email,
			productId,
		);
	};

	const addReview = (newReview: ReviewFragment) => {
		addOptimisticReview(newReview);
	};

	return (
		<div>
			<form onSubmit={handleFormSubmit}>
				<label>
					Headline:
					<input type="text" name="headline" required />
				</label>
				<label>
					Content:
					<textarea name="content" required></textarea>
				</label>
				<label>
					Rating:
					<input type="number" name="rating" min="1" max="5" required />
				</label>
				<label>
					Name:
					<input type="text" name="name" required />
				</label>
				<label>
					Email:
					<input type="email" name="email" required />
				</label>
				<button type="submit">Submit Review</button>
			</form>
			<div>
				{optimisticReviews.map((review, index) => (
					<div key={index}>
						<h3>{review.headline}</h3>
						<p>{review.content}</p>
						<p>Rating: {review.rating} / 5</p>
						<p>Reviewed by: {review.name}</p>
						<p>Contact: {review.email}</p>
					</div>
				))}
			</div>
		</div>
	);
};
