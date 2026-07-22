import React from "react";
import Card from "../../../../components/common/Card";

// ================================================
// Interface Props
// ================================================

export interface PaymentDelayedCardProps {
  /** URL gambar ilustrasi */
  illustrationUrl?: string;
  /** Alt text untuk gambar ilustrasi */
  illustrationAlt?: string;
  /** Judul status pembayaran */
  title?: string;
  /** Deskripsi informasi */
  description?: string;
  /** Opsional: className tambahan */
  className?: string;
}

// ================================================
// Component
// ================================================

export const PaymentDelayedCard: React.FC<PaymentDelayedCardProps> = ({
  illustrationUrl = "/online-shopping 1.png",
  illustrationAlt = "Pembayaran Tertunda",
  title = "Pembayaran Tertunda!",
  description = "Silakan cek email kamu untuk informasi lebih lanjut. Hubungi kami jika ada kendala.",
  className,
}) => {
  return (
    <Card
      className={
        className ??
        "w-full p-6 md:p-12 bg-white flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 rounded-2xl"
      }
    >
      {/* Gambar Ilustrasi */}
      <div className="w-full max-w-sm mb-8 flex justify-center">
        <img
          src={illustrationUrl}
          alt={illustrationAlt}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Judul Status */}
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
        {title}
      </h1>

      {/* Deskripsi Informasi */}
      <p className="text-sm md:text-base text-gray-500 max-w-md leading-relaxed">
        {description}
      </p>
    </Card>
  );
};

PaymentDelayedCard.displayName = "PaymentDelayedCard";
