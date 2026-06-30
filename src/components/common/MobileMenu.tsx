import { useState } from "react";
import { Link } from "react-router";

export interface MobileMenuItem {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: string;
}

export interface MobileMenuProps {
  menuItems?: MobileMenuItem[];
  avatarUrl?: string;
  userName?: string;
  userEmail?: string;
}

const defaultMenuItems: MobileMenuItem[] = [
  { label: "Profil Saya", href: "/profile", icon: "👤" },
  { label: "Pengaturan", href: "/settings", icon: "⚙️" },
  { label: "Bantuan", href: "/help", icon: "❓" },
  { label: "Keluar", href: "/login", icon: "🚪" },
];

function MobileMenu({
  menuItems = defaultMenuItems,
  avatarUrl = "https://i.pravatar.cc/40",
  userName,
  userEmail,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="block md:hidden bg-transparent text-3xl cursor-pointer leading-none p-1"
        aria-label={isOpen ? "Tutup menu" : "Buka menu"}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header panel */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <span className="text-sm font-semibold text-gray-900">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl leading-none cursor-pointer text-gray-500 hover:text-gray-700"
              aria-label="Tutup menu"
            >
              ✕
            </button>
          </div>

          {/* User info */}
          {(userName || userEmail) && (
            <div className="px-5 py-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <img
                  src={avatarUrl}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div className="min-w-0 flex-1">
                  {userName && (
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {userName}
                    </p>
                  )}
                  {userEmail && (
                    <p className="text-xs text-gray-500 truncate mt-0.5">
                      {userEmail}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Menu items */}
          <div className="flex-1 overflow-y-auto py-3">
            {menuItems.map((item, idx) => (
              <Link
                key={`${item.label}-${idx}`}
                to={item.href ?? "#"}
                onClick={() => {
                  setIsOpen(false);
                  item.onClick?.();
                }}
                className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors no-underline"
              >
                {item.icon && (
                  <span className="text-lg flex-shrink-0 w-7 text-center">
                    {item.icon}
                  </span>
                )}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
