import { useState } from "react";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Tipe data untuk setiap grup filter                                        */
/* -------------------------------------------------------------------------- */
export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterGroup {
  id: string;
  title: string;
  type: "checkbox" | "radio";
  options: FilterOption[];
}

interface FilterSidebarProps {
  groups: FilterGroup[];
  onReset?: () => void;
  className?: string;
}

/* -------------------------------------------------------------------------- */
/*  Sub-komponen: satu grup filter dengan tombol collapsible                  */
/* -------------------------------------------------------------------------- */
function CollapsibleFilterGroup({
  group,
}: {
  group: FilterGroup;
}) {
  const [open, setOpen] = useState(true);
  const inputType = group.type === "checkbox" ? "checkbox" : "radio";
  const nameAttr = group.type === "radio" ? group.id : undefined;

  return (
    <div>
      {/* Header grup — bisa diklik untuk toggle collapsible */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex justify-between items-center w-full mb-3 cursor-pointer bg-transparent border-none p-0"
      >
        <span className="font-semibold text-[15px] text-[#333]">
          {group.title}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-gray-400" />
        ) : (
          <ChevronDown size={16} className="text-gray-400" />
        )}
      </button>

      {/* Daftar opsi — muncul/ hilang sesuai state open */}
      {open && (
        <div className="flex flex-col gap-2.5 pl-1">
          {group.options.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-3 text-sm text-[#555] cursor-pointer"
            >
              <input
                type={inputType}
                name={nameAttr}
                value={opt.value}
                className="w-4 h-4 rounded border-gray-300 accent-emerald-500"
              />
              {opt.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  FilterSidebar — komponen utama                                            */
/* -------------------------------------------------------------------------- */
function FilterSidebar({ groups, onReset, className = "" }: FilterSidebarProps) {
  return (
    <aside
      className={`w-full lg:w-[320px] bg-white border border-[#e0e0e0] rounded-lg p-6 lg:sticky lg:top-24 shrink-0 shadow-sm ${className}`}
    >
      {/* Header filter */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg text-[#222] flex items-center gap-2">
          <Filter size={18} className="text-[#333]" />
          Filter
        </h3>
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="text-red-500 font-semibold text-sm hover:underline bg-transparent border-none cursor-pointer"
          >
            Reset
          </button>
        )}
      </div>

      {/* Rendu tiap grup filter */}
      {groups.map((group, index) => (
        <div
          key={group.id}
          className={index > 0 ? "border-t border-gray-100 pt-4 mb-6" : "mb-6"}
        >
          <CollapsibleFilterGroup group={group} />
        </div>
      ))}
    </aside>
  );
}

export default FilterSidebar;
