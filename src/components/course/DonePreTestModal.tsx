import React, { useEffect, useCallback } from "react";

interface DonePreTestModalProps {
  openModal: boolean;
  onClose: () => void;
  onSubmit?: () => void;

  title?: string;
  subtitle?: string;
  submitText?: string;
  cancelText?: string;

  closeOnBackdrop?: boolean;
  closeOnEsc?: boolean;
}

const DonePreTestModal: React.FC<DonePreTestModalProps> = ({
  openModal,
  onClose,
  onSubmit,

  title = "Selesaikan Pretest",
  subtitle = "Apakah kamu yakin untuk menyelesaikan pretest ini?",
  submitText = "Selesai",
  cancelText = "Batal",

  closeOnBackdrop = true,
  closeOnEsc = true,
}) => {
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
        className="w-full max-w-2xl rounded-3xl bg-white p-10 shadow-xl flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Illustration Image */}
        <div className="mb-8 w-full max-w-md">
          <img
            src="selesai-pretest.png"
            alt="Done Pretest Illustration"
            className="w-full h-auto object-contain mx-auto"
          />
        </div>

        {/* Title */}
        <h2 className="mb-3 text-center text-2xl font-bold tracking-wide text-black">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="mb-8 text-center font-normal text-base text-gray-500 max-w-md leading-relaxed">
          {subtitle}
        </p>

        {/* Buttons Action */}
        <div className="flex gap-4 w-full">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-xl border-2 border-green-500 py-3.5 font-semibold text-green-500 transition hover:bg-green-50"
          >
            {cancelText}
          </button>

          <button
            type="button"
            onClick={onSubmit}
            className="flex-1 rounded-xl bg-green-500 py-3.5 font-semibold text-white transition hover:bg-green-600"
          >
            {submitText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonePreTestModal;
