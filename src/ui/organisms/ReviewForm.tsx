"use client";

import { experimental_useOptimistic as useOptimistic, useState } from "react";
import { Rating } from "@/ui/atoms/Rating";
import { submitReview } from "@/api/reviews";
import { type ReviewFragment } from "@/gql/graphql";

export const ReviewForm = ({ productId }: { productId: string }) => {
	const updateReviews = (reviews: ReviewFragment[], newReview: ReviewFragment) => [
		...reviews,
		newReview,
	];
	const [optimisticReviews, addOptimisticReview] = useOptimistic([], updateReviews);
	const [rating, setRating] = useState<number | null>(null);

	const handleRatingChange = (newRating: number) => {
		setRating(newRating);
	};

	const handleFormSubmit = async (formData: FormData) => {
		const newReview = {
			headline: formData.get("headline")?.toString() || "",
			content: formData.get("content")?.toString() || "",
			rating: rating || 0,
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
		<div className="mb-14 mt-4 grid grid-flow-row grid-cols-1 gap-8 lg:grid-cols-3">
			<div className="col-span-1">
				<h2 className="py-8 text-xl font-extrabold leading-7 tracking-tight text-steel-gray">
					Customer Reviews
				</h2>
				<p className="font-sans text-base text-steel-gray">
					Share your thoughts and feedback to help others discover this product.
				</p>
				<form data-testid="add-review-form" action={handleFormSubmit}>
					<div className="my-4">
						<label className="mb-2 block text-sm font-semibold text-steel-gray">
							Headline
							<input
								className="block h-10 w-full appearance-none rounded-lg border-2 border-bridal-heath bg-bridal-heath px-4 text-base font-normal leading-4 text-steel-gray shadow-none transition duration-300 focus:shadow-md focus:outline-none"
								type="text"
								name="headline"
								required
							/>
						</label>
						<label className="mb-2 block text-sm font-semibold text-steel-gray">
							Content
							<textarea
								className="block h-32 w-full appearance-none rounded-lg border-2 border-bridal-heath bg-bridal-heath px-4 py-2.5 text-base font-normal leading-4 text-steel-gray shadow-none transition duration-300 focus:shadow-md focus:outline-none"
								name="content"
								required
							></textarea>
						</label>
						<label className="mb-2 block text-sm font-semibold text-steel-gray">
							Rating
							<div>
								{Array.from({ length: 5 }).map((_, index) => (
									<label key={index}>
										<input
											type="radio"
											name="rating"
											value={index + 1}
											onChange={() => handleRatingChange(index + 1)}
											className="sr-only"
											readOnly
										/>
										<span
											className={`cursor-pointer text-lg ${
												rating !== null && rating >= index + 1
													? "text-brick-red"
													: "text-gun-powder opacity-25"
											}`}
										>
											{rating !== null && rating >= index + 1 ? "★" : "☆"}
										</span>
									</label>
								))}
							</div>
						</label>
						<label className="mb-2 block text-sm font-semibold text-steel-gray">
							Name
							<input
								className="block h-10 w-full appearance-none rounded-lg border-2 border-bridal-heath bg-bridal-heath px-4 text-base font-normal leading-4 text-steel-gray shadow-none transition duration-300 focus:shadow-md focus:outline-none"
								type="text"
								name="name"
								required
							/>
						</label>
						<label className="mb-2 block text-sm font-semibold text-steel-gray">
							Email
							<input
								className="block h-10 w-full appearance-none rounded-lg border-2 border-bridal-heath bg-bridal-heath px-4 text-base font-normal leading-4 text-steel-gray shadow-none transition duration-300 focus:shadow-md focus:outline-none"
								type="email"
								name="email"
								required
							/>
						</label>
					</div>
					<button
						disabled={optimisticReviews.length > 0}
						className="h-10 rounded-lg bg-gun-powder px-4 text-base font-bold leading-4 text-bridal-heath transition-transform duration-300 hover:scale-[1.04] disabled:cursor-not-allowed disabled:bg-gun-powder disabled:bg-opacity-25"
						type="submit"
					>
						Submit review
					</button>
				</form>
			</div>
			<div className="col-span-1 pt-8 text-base text-steel-gray lg:col-span-2">
				{optimisticReviews.length > 0 && (
					<p className="rounded bg-brick-red px-2 py-1 text-xs font-semibold uppercase text-bridal-heath">
						Your review will be displayed after approval by a site moderator.
					</p>
				)}
				{optimisticReviews.map((review, index) => (
					<div className="my-2 bg-bridal-heath px-2 py-3 text-sm sm:px-3 sm:py-4" key={index}>
						<h3 className="text-base font-bold">{review.headline}</h3>
						<p>{review.content}</p>
						{review.rating && <Rating rating={review.rating} />}
						<p>
							<span className="font-semibold">Reviewed by:</span> {review.name}
						</p>
						<p className="italic">{review.email}</p>
					</div>
				))}
			</div>
		</div>
	);
};
