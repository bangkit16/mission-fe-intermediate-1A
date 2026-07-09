import React from "react";
import { Star } from "lucide-react";

// ================================================
// Interface Props
// ================================================
export interface StarRatingProps {
  /** Nilai rating (e.g. 3.5, 4.8) */
  rating: number;
  /** Ukuran icon bintang (default: 5) */
  size?: number;
  /** Tampilkan angka di samping bintang (default: true) */
  showValue?: boolean;
  /** Class name tambahan */
  className?: string;
}

// ================================================
// Component
// ================================================
export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  size = 5,
  showValue = true,
  className,
}) => {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = star <= Math.floor(rating);
          const isHalf =
            !isFilled &&
            star === Math.ceil(rating) &&
            rating % 1 !== 0;

          return (
            <Star
              key={star}
              className={`${
                isFilled
                  ? "text-[#FBBF24] fill-[#FBBF24]"
                  : isHalf
                    ? "text-[#FBBF24] fill-[#FBBF24] opacity-50"
                    : "text-gray-200 fill-gray-200"
              }`}
              style={{ width: size, height: size }}
            />
          );
        })}
      </div>
      {showValue && (
        <span className="text-sm font-semibold text-gray-600 ml-1">
          {rating}
        </span>
      )}
    </div>
  );
};

StarRating.displayName = "StarRating";
