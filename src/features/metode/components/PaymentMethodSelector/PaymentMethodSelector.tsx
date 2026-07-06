import React from "react";
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from "lucide-react";

// ================================================
// Type Definitions
// ================================================

export interface RegularPaymentMethod {
  id: string;
  name: string;
  logo: string;
  isLogosOnly?: false;
}

export interface LogosOnlyPaymentMethod {
  id: string;
  name: string;
  isLogosOnly: true;
  logos: string[];
}

export type PaymentMethod = RegularPaymentMethod | LogosOnlyPaymentMethod;

export interface PaymentCategory {
  id: string;
  name: string;
  methods: PaymentMethod[];
}

export interface PaymentMethodSelectorProps {
  /** Daftar kategori metode pembayaran */
  categories: PaymentCategory[];
  /** ID kategori yang sedang terbuka (accordion multi-open) */
  openCategoryIds: string[];
  /** ID metode pembayaran yang sedang terpilih */
  selectedMethodId: string;
  /** Handler saat toggle accordion kategori */
  onToggleCategory: (categoryId: string) => void;
  /** Handler saat memilih metode pembayaran */
  onSelectMethod: (methodId: string) => void;
  /** Opsional: className tambahan */
  className?: string;
}

// ================================================
// Component
// ================================================

export const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({
  categories,
  openCategoryIds,
  selectedMethodId,
  onToggleCategory,
  onSelectMethod,
  className,
}) => {
  return (
    <div className={className}>
      <h1 className="text-xl md:text-2xl leading-tight font-bold mb-5">
        Metode Pembayaran
      </h1>
      <div className="space-y-4">
        {categories.map((category) => {
          const isCategoryOpen = openCategoryIds.includes(category.id);

          return (
            <div key={category.id} className="space-y-3">
              {/* Accordion Kategori Header */}
              <button
                type="button"
                onClick={() => onToggleCategory(category.id)}
                className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none transition-colors duration-150"
              >
                <span className="text-sm md:text-base">
                  {category.name}
                </span>
                {isCategoryOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {/* List Item Metode Pembayaran */}
              {isCategoryOpen && (
                <div className="space-y-2.5">
                  {category.methods.map((method) => {
                    const isSelected = selectedMethodId === method.id;

                    // Render khusus untuk kumpulan logo saja
                    if (method.isLogosOnly) {
                      return (
                        <div
                          key={method.id}
                          className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl min-h-[64px]"
                        >
                          {method.logos?.map((logoUrl, index) => (
                            <img
                              key={index}
                              src={logoUrl}
                              alt="card logo"
                              className="h-6 md:h-8 object-contain"
                            />
                          ))}
                        </div>
                      );
                    }

                    return (
                      <button
                        type="button"
                        key={method.id}
                        onClick={() => onSelectMethod(method.id)}
                        className={`w-full flex items-center justify-between p-4 bg-white border rounded-xl transition-all duration-150 focus:outline-none group ${
                          isSelected
                            ? "border-gray-200"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={method.logo}
                            alt={method.name}
                            className="w-8 h-8 object-contain rounded"
                          />
                          <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900">
                            {method.name}
                          </span>
                        </div>

                        {/* Lingkaran indikator aktif/terpilih */}
                        {isSelected && (
                          <CheckCircle2 className="w-5 h-5 text-[#FF5722] fill-[#FF5722] stroke-white" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

PaymentMethodSelector.displayName = "PaymentMethodSelector";
