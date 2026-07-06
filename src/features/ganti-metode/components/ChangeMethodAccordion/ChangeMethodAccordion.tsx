import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// ================================================
// Interface Props
// ================================================

export interface AccordionSection {
  id: string;
  label: string;
}

export interface ChangeMethodAccordionProps {
  /** Daftar seksi accordion */
  sections: AccordionSection[];
  /** ID seksi yang sedang terbuka */
  openSectionIds: string[];
  /** Handler saat toggle accordion */
  onToggleSection: (id: string) => void;
  /** Label tombol bayar */
  payButtonLabel?: string;
  /** Handler saat tombol bayar diklik */
  onPayNow?: () => void;
  /** Opsional: className tambahan */
  className?: string;
}

// ================================================
// Component
// ================================================

export const ChangeMethodAccordion: React.FC<ChangeMethodAccordionProps> = ({
  sections,
  openSectionIds,
  onToggleSection,
  payButtonLabel = "Bayar Sekarang",
  onPayNow,
  className,
}) => {
  return (
    <div className={className}>
      <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
        Ubah Metode Pembayaran
      </h2>

      <div className="space-y-3">
        {sections.map((section) => {
          const isOpen = openSectionIds.includes(section.id);

          return (
            <div
              key={section.id}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => onToggleSection(section.id)}
                className="w-full flex items-center justify-between p-4 bg-white text-left font-bold text-sm md:text-base text-gray-800 focus:outline-none"
              >
                <span>{section.label}</span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Tombol Bayar Sekarang */}
      <div className="pt-2">
        <button
          type="button"
          onClick={onPayNow}
          className="w-full py-3 bg-[#22C55E] hover:bg-green-600 text-white font-bold text-sm md:text-base rounded-xl shadow-sm transition-colors duration-150 text-center"
        >
          {payButtonLabel}
        </button>
      </div>
    </div>
  );
};

ChangeMethodAccordion.displayName = "ChangeMethodAccordion";
