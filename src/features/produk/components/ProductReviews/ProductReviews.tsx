import React from "react";
import Card from "../../../../components/common/Card";
import { ReviewCard } from "../ReviewCard";

// ================================================
// Types
// ================================================
export interface ReviewData {
  id: string;
  name: string;
  batch: string;
  avatar: string;
  comment: string;
  rating: number;
}

export interface ProductReviewsProps {
  /** Daftar review */
  reviews: ReviewData[];
}

// ================================================
// Component
// ================================================
export const ProductReviews: React.FC<ProductReviewsProps> = ({ reviews }) => {
  return (
    <Card className="p-4 md:p-6 mb-5">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Rating dan Review
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            batch={review.batch}
            avatar={review.avatar}
            comment={review.comment}
            rating={review.rating}
          />
        ))}
      </div>
    </Card>
  );
};

ProductReviews.displayName = "ProductReviews";
