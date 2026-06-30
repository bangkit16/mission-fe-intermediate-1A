import { useState, type ReactNode } from "react";
import {
  ChevronUp,
  ChevronDown,
  BookOpen,
  ShoppingBag,
  Clock,
  Filter,
} from "lucide-react";

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
/*  Mapping icon untuk tiap grup                                              */
/* -------------------------------------------------------------------------- */
const groupIcons: Record<string, ReactNode> = {
  "bidang-studi": <BookOpen size={24} strokeWidth={2} />,
  harga: <ShoppingBag size={24} strokeWidth={2} />,
  durasi: <Clock size={24} strokeWidth={2} />,
};

/* -------------------------------------------------------------------------- */
/*  Sub-komponen: satu grup filter (card collapsible)                         */
/* -------------------------------------------------------------------------- */
function CollapsibleFilterGroup({ group }: { group: FilterGroup }) {
  const [open, setOpen] = useState(true);
  const inputType = group.type === "checkbox" ? "checkbox" : "radio";
  const nameAttr = group.type === "radio" ? group.id : undefined;

  return (
    <div className="flex flex-col justify-center items-start p-3 px-4 gap-[18px] w-full bg-white border border-[rgba(58,53,65,0.12)] rounded-[10px]">
      {/* Header grup — bisa diklik untuk toggle */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex flex-row items-center gap-4 w-full bg-transparent border-none p-0 cursor-pointer"
      >
        {/* Icon */}
        <span className="w-6 h-6 flex items-center justify-center text-[#3ECF4C]">
          {groupIcons[group.id] || groupIcons["bidang-studi"]}
        </span>

        {/* Judul */}
        <span
          className="flex-1 text-[16px] leading-[140%] tracking-[0.2px] text-[#3ECF4C] text-left"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
        >
          {group.title}
        </span>

        {/* Chevron */}
        <span className="w-6 h-6 flex items-center justify-center text-[#3ECF4C]">
          {open ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </span>
      </button>

      {/* Daftar opsi */}
      {open && (
        <div className="flex flex-col items-start gap-3 w-full">
          {group.options.map((opt) => (
            <label
              key={opt.value}
              className="flex flex-row items-center gap-3 cursor-pointer"
            >
              <input
                type={inputType}
                name={nameAttr}
                value={opt.value}
                className="w-[18px] h-[18px] accent-[#3ECF4C]"
                style={
                  group.type === "checkbox"
                    ? { borderRadius: "4px" }
                    : undefined
                }
              />
              <span
                className="text-[16px] leading-[140%] tracking-[0.2px] text-[rgba(51,51,51,0.68)]"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                {opt.label}
              </span>
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
      className={`w-full lg:w-[366px] flex flex-col items-start p-5 gap-4 bg-white border border-[rgba(58,53,65,0.12)] rounded-[10px] lg:sticky lg:top-24 shrink-0 ${className}`}
    >
      {/* Header Filter + Reset */}
      <div className="flex flex-row justify-between items-center gap-4 w-full">
        <h3
          className="text-[18px] leading-[120%] text-[rgba(51,51,51,0.68)] flex items-center gap-2"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
        >
          <Filter size={18} className="text-[rgba(51,51,51,0.68)]" />
          Filter
        </h3>

        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="bg-transparent border-none cursor-pointer text-[16px] leading-[140%] tracking-[0.2px] text-[#FF5C2B] hover:underline"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
            }}
          >
            Reset
          </button>
        )}
      </div>

      {/* Rendu tiap grup filter sebagai card terpisah */}
      {groups.map((group) => (
        <CollapsibleFilterGroup key={group.id} group={group} />
      ))}
    </aside>
  );
}

export default FilterSidebar;
