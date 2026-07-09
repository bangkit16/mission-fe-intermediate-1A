import React from "react";
import { StarRating } from "../StarRating";

// ================================================
// Interface Props
// ================================================
export interface ReviewCardProps {
  /** Nama reviewer */
  name: string;
  /** Batch reviewer (e.g. "Alumni Batch 2") */
  batch: string;
  /** URL avatar reviewer */
  avatar: string;
  /** Konten komentar */
  comment: string;
  /** Rating (numeric) */
  rating: number;
}

// ================================================
// Component
// ================================================
export const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  batch,
  avatar,
  comment,
  rating,
}) => {
  return (
    <div className="p-5 bg-white border border-gray-200 rounded-xl flex flex-col justify-between gap-4">
      <div>
        {/* User Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center overflow-hidden shrink-0">
            <img
              src={avatar}
              alt={name}
              className="w-10 h-10 object-cover rounded-xl"
            />
          </div>
          <div className="min-w-0">
            <h4 className="text-base font-bold text-gray-900 truncate">
              {name}
            </h4>
            <p className="text-sm text-gray-400">{batch}</p>
          </div>
        </div>

        {/* Review Comment */}
        <p className="text-sm md:text-base text-gray-700 font-normal leading-relaxed mt-4">
          {comment}
        </p>
      </div>

      {/* Star Ratings */}
      <StarRating rating={rating} />
    </div>
  );
};

ReviewCard.displayName = "ReviewCard";
