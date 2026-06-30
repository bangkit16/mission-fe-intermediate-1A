import { useState } from "react";
import { Link } from "react-router";

export interface MenuItem {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: string;
}

export interface ProfileDropdownProps {
  avatarUrl?: string;
  userName?: string;
  userEmail?: string;
  menuItems?: MenuItem[];
}

const defaultMenuItems: MenuItem[] = [
  { label: "Profil Saya", href: "/profile", icon: "👤" },
  { label: "Pengaturan", href: "/settings", icon: "⚙️" },
  { label: "Bantuan", href: "/help", icon: "❓" },
  { label: "Keluar", href: "/login", icon: "🚪" },
];

function ProfileDropdown({
  avatarUrl = "https://i.pravatar.cc/40",
  userName,
  userEmail,
  menuItems = defaultMenuItems,
}: ProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Avatar trigger */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img
          src={avatarUrl}
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-transparent hover:border-gray-300 transition-all duration-200"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute right-0 top-full mt-2 z-20 w-64 rounded-xl border border-gray-100 bg-white shadow-lg py-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* User info */}
            {(userName || userEmail) && (
              <div className="px-4 pb-3 mb-2 border-b border-gray-100">
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
            )}

            {/* Menu items */}
            <div className="space-y-0.5">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href ?? "#"}
                  onClick={() => {
                    setIsOpen(false);
                    item.onClick?.();
                  }}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors no-underline"
                >
                  {item.icon && (
                    <span className="text-base flex-shrink-0 w-6 text-center">
                      {item.icon}
                    </span>
                  )}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfileDropdown;
