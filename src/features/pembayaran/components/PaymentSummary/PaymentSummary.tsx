import React from "react";

// ================================================
// Interface Props
// ================================================

export interface PaymentSummaryProps {
  /** Nama produk yang dibeli */
  productName: string;
  /** Harga produk */
  productPrice: number;
  /** Biaya admin */
  adminFee: number;
  /** Total pembayaran (jika tidak dihitung otomatis) */
  total?: number;
  /** Label tombol perubahan metode */
  changeMethodLabel?: string;
  /** Label tombol bayar */
  payNowLabel?: string;
  /** Handler untuk tombol Ganti Metode Pembayaran */
  onChangeMethod?: () => void;
  /** Handler untuk tombol Bayar Sekarang */
  onPayNow?: () => void;
  /** Opsional: className tambahan */
  className?: string;
}

// ================================================
// Utility
// ================================================

const formatCurrency = (amount: number): string => {
  return `Rp ${amount.toLocaleString("id-ID")}`;
};

// ================================================
// Component
// ================================================

export const PaymentSummary: React.FC<PaymentSummaryProps> = ({
  productName,
  productPrice,
  adminFee,
  total,
  changeMethodLabel = "Ganti Metode Pembayaran",
  payNowLabel = "Bayar Sekarang",
  onChangeMethod,
  onPayNow,
  className,
}) => {
  const displayTotal = total ?? productPrice + adminFee;

  return (
    <div className={className}>
      <h2 className="text-base md:text-lg font-bold text-gray-900 mb-4">
        Ringkasan Pesanan
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between items-start gap-4">
          <p className="text-sm md:text-base text-gray-500 max-w-[70%] leading-relaxed">
            {productName}
          </p>
          <span className="text-sm md:text-base font-bold text-gray-700 whitespace-nowrap">
            {formatCurrency(productPrice)}
          </span>
        </div>

        <div className="flex justify-between items-center gap-4">
          <p className="text-sm md:text-base text-gray-500">Biaya Admin</p>
          <span className="text-sm md:text-base font-bold text-gray-700 whitespace-nowrap">
            {formatCurrency(adminFee)}
          </span>
        </div>

        <hr className="border-gray-200 my-2" />

        <div className="flex justify-between items-center gap-4 py-1">
          <span className="text-sm md:text-base font-bold text-gray-900">
            Total Pembayaran
          </span>
          <span className="text-base md:text-lg font-bold text-[#22C55E] whitespace-nowrap">
            {formatCurrency(displayTotal)}
          </span>
        </div>

        {/* Tombol Aksi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <button
            type="button"
            onClick={onChangeMethod}
            className="w-full py-3 bg-white border border-[#22C55E] hover:bg-green-50 text-[#22C55E] font-bold text-sm md:text-base rounded-xl transition-colors duration-150 text-center"
          >
            {changeMethodLabel}
          </button>
          <button
            type="button"
            onClick={onPayNow}
            className="w-full py-3 bg-[#22C55E] hover:bg-green-600 text-white font-bold text-sm md:text-base rounded-xl shadow-sm transition-colors duration-150 text-center"
          >
            {payNowLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

PaymentSummary.displayName = "PaymentSummary";
