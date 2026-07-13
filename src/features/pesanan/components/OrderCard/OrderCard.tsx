import React from 'react';

// ================================================
// Interface Props
// ================================================
export interface OrderData {
  id: number;
  invoice: string;
  date: string;
  status: string;
  title: string;
  image: string;
  price: string;
  total: string;
}

export interface OrderCardProps {
  /** Data order yang akan ditampilkan */
  order: OrderData;
  /** Fungsi utility untuk mendapatkan style status berdasarkan status order */
  getStatusStyle: (status: string) => string;
  /** Handler saat nomor invoice diklik */
  onInvoiceClick?: (invoice: string) => void;
  /** Opsional: className tambahan */
  className?: string;
}

// ================================================
// Component
// ================================================
export const OrderCard: React.FC<OrderCardProps> = ({
  order,
  getStatusStyle,
  onInvoiceClick,
  className,
}) => {
  // --- Render ---
  return (
    <div className={`border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white ${className ?? ''}`}>
      {/* Header bar di dalam card pesanan */}
      <div className="bg-green-50/50 px-4 py-3 border-b border-gray-100 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs md:text-sm text-gray-500">
          <span>
            No. Invoice:{' '}
            <span
              className="text-blue-500 font-medium underline cursor-pointer"
              onClick={() => onInvoiceClick?.(order.invoice)}
            >
              {order.invoice}
            </span>
          </span>
          <span className="hidden md:inline text-gray-300">|</span>
          <span className="font-medium">Waktu Pembayaran: {order.date}</span>
        </div>

        {/* Label status badge */}
        <span
          className={`px-3 py-1 rounded-lg text-xs font-bold ${getStatusStyle(order.status)}`}
        >
          {order.status}
        </span>
      </div>

      {/* Konten detail produk item */}
      <div className="p-4 flex flex-col sm:flex-row gap-4 items-start justify-between">
        <div className="flex gap-4">
          <img
            src={order.image}
            alt={order.title}
            className="w-20 h-14 md:w-24 md:h-16 object-cover rounded-xl shrink-0"
          />
          <div className="space-y-1 flex flex-col justify-center">
            <h4 className="text-sm md:text-base font-bold text-gray-900 leading-snug">
              {order.title}
            </h4>
          </div>
        </div>

        {/* Info Detail Harga Produk */}
        <div className="text-left sm:text-right w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-50 shrink-0">
          <span className="text-xs text-gray-400 block mb-0.5">Harga</span>
          <span className="text-sm font-bold text-gray-900">{order.price}</span>
        </div>
      </div>

      {/* Footer bar subtotal */}
      <div className="px-4 py-3 bg-green-50/50 border-t border-gray-50 flex items-center justify-between">
        <span className="text-xs md:text-sm text-gray-500">Total Pembayaran</span>
        <span className="text-sm md:text-base font-bold text-[#22C55E]">
          {order.total}
        </span>
      </div>
    </div>
  );
};

OrderCard.displayName = 'OrderCard';
