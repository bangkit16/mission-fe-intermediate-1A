import React from 'react';
import MenuCard from '../../../../components/common/MenuCard';

// ================================================
// Interface Props
// ================================================
export interface PesananSidebarProps {
  /** Opsional: className tambahan */
  className?: string;
}

// ================================================
// Component
// ================================================
export const PesananSidebar: React.FC<PesananSidebarProps> = ({
  className,
}) => {
  // --- Render ---
  return (
    <aside className={`w-full lg:w-70 shrink-0 relative md:sticky md:top-24 ${className ?? ''}`}>
      <div>
        <h3 className="md:text-xl text-base font-semibold text-gray-800 flex items-center gap-2 mb-2">
          Daftar Pesanan
        </h3>
        <p className="text-[14px] leading-[120%] text-gray-600 mb-3">
          Informasi terperinci mengenai pembelian
        </p>
      </div>
      <MenuCard active="pesanan" />
    </aside>
  );
};

PesananSidebar.displayName = 'PesananSidebar';
