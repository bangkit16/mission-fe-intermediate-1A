import React from "react";

// ================================================
// Interface Props
// ================================================

export interface OrderSummaryProps {
  /** Nama produk yang dibeli */
  productName: string;
  /** Harga produk */
  productPrice: number;
  /** Biaya admin */
  adminFee: number;
  /** Total pembayaran (jika tidak dihitung otomatis) */
  total?: number;
  /** Label untuk tombol aksi */
  buttonLabel?: string;
  /** Handler saat tombol aksi diklik */
  onAction?: () => void;
  /** Opsional: className tambahan */
  className?: string;
}

// ================================================
// Utility helpers
// ================================================

const formatCurrency = (amount: number): string => {
  return `Rp ${amount.toLocaleString("id-ID")}`;
};

// ================================================
// Component
// ================================================

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  productName,
  productPrice,
  adminFee,
  total,
  buttonLabel = "Beli Sekarang",
  onAction,
  className,
}) => {
  const displayTotal = total ?? productPrice + adminFee;

  return (
    <div className={className}>
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Ringkasan Pesanan
      </h2>

      <div className="space-y-4">
        {/* Item Produk */}
        <div className="flex justify-between items-start gap-4">
          <p className="text-sm md:text-base text-gray-500 max-w-[70%] leading-relaxed">
            {productName}
          </p>
          <span className="text-sm md:text-base font-bold text-gray-700 whitespace-nowrap">
            {formatCurrency(productPrice)}
          </span>
        </div>

        {/* Biaya Admin */}
        <div className="flex justify-between items-center gap-4">
          <p className="text-sm md:text-base text-gray-500">
            Biaya Admin
          </p>
          <span className="text-sm md:text-base font-bold text-gray-700 whitespace-nowrap">
            {formatCurrency(adminFee)}
          </span>
        </div>

        {/* Garis Pembatas */}
        <hr className="border-gray-200 my-2" />

        {/* Total Pembayaran */}
        <div className="flex justify-between items-center gap-4 py-2">
          <span className="text-sm md:text-base font-bold text-gray-900">
            Total Pembayaran
          </span>
          <span className="text-base md:text-lg font-bold text-[#22C55E] whitespace-nowrap">
            {formatCurrency(displayTotal)}
          </span>
        </div>

        {/* Tombol Aksi */}
        <button
          type="button"
          onClick={onAction}
          className="w-full mt-2 py-3 bg-[#22C55E] hover:bg-green-600 text-white font-bold text-sm md:text-base rounded-xl shadow-sm transition-colors duration-150 text-center"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

OrderSummary.displayName = "OrderSummary";
