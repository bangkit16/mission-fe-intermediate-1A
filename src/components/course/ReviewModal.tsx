import React, { useEffect, useCallback, useState } from "react";

interface ReviewModalProps {
  openModal: boolean;
  onClose: () => void;
  onSubmit?: (data: { rating: number; review: string }) => void;

  title?: string;
  subtitle?: string;
  submitText?: string;
  cancelText?: string;

  closeOnBackdrop?: boolean;
  closeOnEsc?: boolean;
}

const ReviewModal: React.FC<ReviewModalProps> = ({
  openModal,
  onClose,
  onSubmit,

  title = "Tulis Review Terbaikmu!",
  subtitle = "Apakah kamu yakin untuk menyelesaikan pretest ini?",
  submitText = "Selesai",
  cancelText = "Batal",

  closeOnBackdrop = true,
  closeOnEsc = true,
}) => {
  const [rating, setRating] = useState<number>(2.5);
  const [review, setReview] = useState("");

  /**
   * Lock body scroll
   */
  useEffect(() => {
    if (!openModal) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [openModal]);

  /**
   * Close with ESC
   */
  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (!closeOnEsc) return;

      if (e.key === "Escape") {
        onClose();
      }
    },
    [closeOnEsc, onClose],
  );

  useEffect(() => {
    if (!openModal) return;

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [openModal, handleEsc]);

  /**
   * Reset form ketika modal dibuka
   */
  useEffect(() => {
    if (!openModal) return;

    // setRating(2.5);
    // setReview("");
  }, [openModal]);

  const handleSubmit = () => {
    onSubmit?.({
      rating,
      review,
    });
  };

  if (!openModal) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4"
      onClick={() => {
        if (closeOnBackdrop) {
          onClose();
        }
      }}
    >
      <div
        className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        <h2 className="mb-2 text-center text-lg font-semibold tracking-wide text-black">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="mb-6 text-center font-normal text-sm text-gray-500">{subtitle}</p>

        {/* Rating */}
        <div className="mb-6 flex justify-center gap-1">
          {[1, 2, 3, 4, 5].map((index) => {
            const isFull = index <= Math.floor(rating);
            // const isHalf =
            //   !isFull && index === Math.ceil(rating) && rating % 1 !== 0;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setRating(index)}
                className="relative h-10 w-10 cursor-pointer"
              >
                <span className="absolute inset-0 text-4xl text-gray-300">
                  ★
                </span>

                {isFull && (
                  <span className="absolute inset-0 text-4xl text-amber-400">
                    ★
                  </span>
                )}
{/* 
                {isHalf && (
                  <span className="absolute inset-0 w-1/2 overflow-hidden text-4xl text-amber-400">
                    ★
                  </span>
                )} */}
              </button>
            );
          })}
        </div>

        {/* Review */}
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Masukkan Review"
          className="mb-6 h-32 w-full resize-none rounded-xl border border-gray-200 p-4 text-gray-700 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Button */}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-xl border-2 border-green-500 py-3.5 font-semibold text-green-500 transition hover:bg-green-50"
          >
            {cancelText}
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            className="flex-1 rounded-xl bg-green-500 py-3.5 font-semibold text-white transition hover:bg-green-600"
          >
            {submitText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
