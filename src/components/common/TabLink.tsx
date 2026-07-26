export interface TabLinkProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function TabLink({ label, active = false, onClick }: TabLinkProps) {
  return (
    <button
      // href={href}
      onClick={onClick}
      className={`whitespace-nowrap text-[15px] pb-2 font-bold no-underline ${
        active
          ? "text-[#f28c28] border-b-[3px] border-[#f28c28]"
          : "text-[#666]"
      }`}
    >
      {label}
    </button>
  );
}

export default TabLink;
