export interface TabLinkProps {
  label: string;
  active?: boolean;
  href?: string;
  onClick?: () => void;
}

function TabLink({ label, active = false, href = "#", onClick }: TabLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`whitespace-nowrap text-[15px] pb-2 font-bold no-underline ${
        active
          ? "text-[#f28c28] border-b-[3px] border-[#f28c28]"
          : "text-[#666]"
      }`}
    >
      {label}
    </a>
  );
}

export default TabLink;
