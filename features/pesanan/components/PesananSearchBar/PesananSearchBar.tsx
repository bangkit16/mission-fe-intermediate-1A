import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

// ================================================
// Interface Props
// ================================================
export interface PesananSearchBarProps {
  /** Nilai input pencarian */
  searchValue?: string;
  /** Handler saat input pencarian berubah */
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Opsional: className tambahan */
  className?: string;
}

// ================================================
// Component
// ================================================
export const PesananSearchBar: React.FC<PesananSearchBarProps> = ({
  searchValue,
  onSearchChange,
  className,
}) => {
  // --- Render ---
  return (
    <div className={`flex items-center gap-2 w-full xl:w-auto pb-3 xl:pb-0 ${className ?? ''}`}>
      <div className="relative flex-1 sm:w-48 lg:w-60">
        <input
          type="text"
          placeholder="Cari Kelas"
          value={searchValue}
          onChange={onSearchChange}
          className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-300"
        />
        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
      </div>

      <button
        type="button"
        className="flex items-center justify-between gap-2 px-3 py-2 border border-gray-200 rounded-xl text-sm text-gray-600 font-medium hover:bg-gray-50 bg-white"
      >
        <span>Urutkan</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>
    </div>
  );
};

PesananSearchBar.displayName = 'PesananSearchBar';
