import React from "react";
import Card from "../../../../components/common/Card";

// ================================================
// Interface Props
// ================================================

export interface PaymentSuccessCardProps {
  /** URL gambar ilustrasi sukses */
  illustrationUrl?: string;
  /** Alt text untuk gambar ilustrasi */
  illustrationAlt?: string;
  /** Judul status pembayaran */
  title?: string;
  /** Deskripsi informasi setelah pembayaran */
  description?: string;
  /** Label tombol aksi */
  actionLabel?: string;
  /** Handler saat tombol diklik */
  onAction?: () => void;
  /** Opsional: className tambahan */
  className?: string;
}

// ================================================
// Component
// ================================================

export const PaymentSuccessCard: React.FC<PaymentSuccessCardProps> = ({
  illustrationUrl = "/online-shopping-female 1.png",
  illustrationAlt = "Pembayaran Berhasil",
  title = "Pembayaran Berhasil!",
  description = "Silakan cek email kamu untuk informasi lebih lanjut. Hubungi kami jika ada kendala.",
  actionLabel = "Lihat Detail Pesanan",
  onAction,
  className,
}) => {
  return (
    <Card
      className={
        className ??
        "w-full p-6 md:p-12 bg-white flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 rounded-2xl"
      }
    >
      {/* Gambar Ilustrasi Sukses */}
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
      <p className="text-sm md:text-base text-gray-500 max-w-md leading-relaxed mb-8">
        {description}
      </p>

      {/* Tombol Aksi */}
      <button
        type="button"
        onClick={onAction}
        className="px-8 py-3 bg-[#22C55E] hover:bg-green-600 text-white font-bold text-sm md:text-base rounded-xl shadow-sm transition-colors duration-150 text-center min-w-[200px]"
      >
        {actionLabel}
      </button>
    </Card>
  );
};

PaymentSuccessCard.displayName = "PaymentSuccessCard";
