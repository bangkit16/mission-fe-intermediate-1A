import { useEffect, useRef, type Ref } from "react";
import { Link } from "react-router";
import { User, BookOpen, ShoppingBag, LogOut } from "lucide-react";

function NavigationMenu({
  open,
  onClose,
  variant = "desktop",
}: {
  open: boolean;
  onClose: () => void;
  variant?: "desktop" | "mobile";
}) {
  const ref = useRef<HTMLElement | null>(null);

  const isMobile = variant === "mobile";

  useEffect(() => {
    if (isMobile || !open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, isMobile, onClose]);

  if (!open) return null;

  const menuClass = isMobile
    ? "border-t border-gray-200 bg-white md:hidden"
    : "absolute right-0 top-14 w-60 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg z-50";

  const itemClass =
    "flex items-center gap-3 px-5 py-4 text-sm text-gray-700 hover:bg-gray-50 transition";

  return (
    <div ref={ref as Ref<HTMLDivElement>} className={menuClass}>
      {isMobile && (
        <Link
          to="/kategori"
          className="block border-b border-gray-100 px-5 py-4 text-sm text-gray-700 hover:bg-gray-50"
          onClick={onClose}
        >
          Kategori
        </Link>
      )}

      <Link to="/profile" className={itemClass} onClick={onClose}>
        <User size={18} />
        Profil Saya
      </Link>

      <Link
        to="/kelas"
        className={`${itemClass} border-t border-gray-100`}
        onClick={onClose}
      >
        <BookOpen size={18} />
        Kelas Saya
      </Link>

      <Link
        to="/pesanan"
        className={`${itemClass} border-t border-gray-100`}
        onClick={onClose}
      >
        <ShoppingBag size={18} />
        Pesanan Saya
      </Link>

      <button
        onClick={onClose}
        className="flex w-full items-center gap-3 border-t border-gray-100 px-5 py-4 text-sm text-red-500 hover:bg-red-50 transition"
      >
        <LogOut size={18} />
        Keluar
      </button>
    </div>
  );
}

export default NavigationMenu;
