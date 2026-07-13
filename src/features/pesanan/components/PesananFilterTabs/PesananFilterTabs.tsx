import React from 'react';

// ================================================
// Interface Props
// ================================================
export interface PesananFilterTabsProps {
  /** Daftar tab yang tersedia */
  tabs: string[];
  /** Tab yang sedang aktif */
  activeTab: string;
  /** Handler saat tab diklik */
  onTabChange: (tab: string) => void;
  /** Opsional: className tambahan */
  className?: string;
}

// ================================================
// Component
// ================================================
export const PesananFilterTabs: React.FC<PesananFilterTabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className,
}) => {
  // --- Render ---
  return (
    <div className={`flex items-center gap-4 md:gap-6 overflow-x-auto whitespace-nowrap scrollbar-none ${className ?? ''}`}>
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onTabChange(tab)}
          className={`text-sm md:text-base font-semibold py-2 border-b-2 transition-all ${
            activeTab === tab
              ? 'border-[#FF5722] text-[#FF5722]'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

PesananFilterTabs.displayName = 'PesananFilterTabs';
