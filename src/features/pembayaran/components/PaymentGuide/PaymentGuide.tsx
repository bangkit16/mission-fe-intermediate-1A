import React from "react";
import { PaymentGuideItem } from "../PaymentGuideItem";
import Card from "../../../../components/common/Card";

// ================================================
// Type Definitions
// ================================================

export interface GuideEntry {
  id: string;
  title: string;
  steps: string[];
}

export interface PaymentGuideProps {
  /** Daftar panduan pembayaran yang akan ditampilkan dalam accordion */
  guides: GuideEntry[];
  /** ID panduan yang sedang terbuka */
  openGuideIds: string[];
  /** Handler saat accordion di-toggle */
  onToggleGuide: (id: string) => void;
  /** Opsional: className tambahan */
  className?: string;
}

// ================================================
// Component
// ================================================

export const PaymentGuide: React.FC<PaymentGuideProps> = ({
  guides,
  openGuideIds,
  onToggleGuide,
  className,
}) => {
  return (
    <Card className={className ?? "p-4 md:p-6 bg-white"}>
      <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
        Tata Cara Pembayaran
      </h2>

      <div className="space-y-4">
        {guides.map((guide) => (
          <PaymentGuideItem
            key={guide.id}
            id={guide.id}
            title={guide.title}
            steps={guide.steps}
            isOpen={openGuideIds.includes(guide.id)}
            onToggle={onToggleGuide}
          />
        ))}
      </div>
    </Card>
  );
};

PaymentGuide.displayName = "PaymentGuide";
