import React from "react";
import { Copy } from "lucide-react";

// ================================================
// Interface Props
// ================================================

export interface VirtualAccountInfoProps {
  /** URL logo bank */
  bankLogoUrl: string;
  /** Nama bank */
  bankName: string;
  /** Nomor Virtual Account yang ditampilkan */
  virtualAccountDisplay: string;
  /** Nomor VA yang akan di-copy (gabungan tanpa spasi) */
  virtualAccountFull: string;
  /** Handler saat tombol Salin diklik */
  onCopy?: (vaNumber: string) => void;
  /** Opsional: className tambahan */
  className?: string;
}

// ================================================
// Component
// ================================================

export const VirtualAccountInfo: React.FC<VirtualAccountInfoProps> = ({
  bankLogoUrl,
  bankName,
  virtualAccountDisplay,
  virtualAccountFull,
  onCopy,
  className,
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(virtualAccountFull);
    onCopy?.(virtualAccountFull);
  };

  return (
    <div className={className}>
      <div className="border border-gray-200 rounded-xl p-5 flex flex-col items-center justify-center text-center bg-white mb-6">
        <img
          src={bankLogoUrl}
          alt={bankName}
          className="h-8 object-contain mb-3"
        />
        <p className="text-sm font-semibold text-gray-800 mb-1">
          Bayar Melalui Virtual Account {bankName}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-base md:text-lg font-bold text-gray-900 tracking-wide">
            {virtualAccountDisplay}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="text-sm font-bold text-[#FF5722] hover:text-orange-600 focus:outline-none flex items-center gap-1 ml-1"
          >
            <Copy className="w-4 h-4" />
            Salin
          </button>
        </div>
      </div>
    </div>
  );
};

VirtualAccountInfo.displayName = "VirtualAccountInfo";
