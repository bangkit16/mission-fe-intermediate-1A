import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// ================================================
// Interface Props
// ================================================

export interface PaymentGuideItemProps {
  /** ID unik untuk item panduan */
  id: string;
  /** Judul panduan (misal: "ATM BCA") */
  title: string;
  /** Daftar langkah-langkah pembayaran */
  steps: string[];
  /** Apakah accordion sedang terbuka */
  isOpen: boolean;
  /** Handler saat accordion di-toggle */
  onToggle: (id: string) => void;
  /** Opsional: className tambahan */
  className?: string;
}

// ================================================
// Component
// ================================================

export const PaymentGuideItem: React.FC<PaymentGuideItemProps> = ({
  id,
  title,
  steps,
  isOpen,
  onToggle,
  className,
}) => {
  return (
    <div className={className}>
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <button
          type="button"
          onClick={() => onToggle(id)}
          className="w-full flex items-center justify-between p-4 bg-white text-left font-bold text-sm md:text-base text-gray-800 focus:outline-none"
        >
          <span>{title}</span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        {isOpen && (
          <div className="p-4 pt-0 text-xs md:text-sm text-gray-600 border-t border-gray-50 bg-white">
            <ol className="list-decimal pl-4 space-y-2 leading-relaxed">
              {steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

PaymentGuideItem.displayName = "PaymentGuideItem";
