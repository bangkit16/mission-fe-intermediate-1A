import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import NavigationMenu from "./NavigationMenu";

function Header() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-300 w-[95%] mx-auto h-18 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-[#f3b02e] text-[32px] font-extrabold leading-none"
        >
          <img src="/Logo.png" alt="Logo" className="block" />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/kategori"
            className="text-sm text-gray-600 hover:text-black transition"
          >
            Kategori
          </Link>

          <div className="relative">
            <button onClick={() => setProfileOpen((prev) => !prev)}>
              <img
                src="https://i.pravatar.cc/40"
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </button>

            <NavigationMenu
              open={profileOpen}
              onClose={() => setProfileOpen(false)}
              variant="desktop"
            />
          </div>
        </nav>

        {/* Mobile */}
        <button
          className="block md:hidden bg-transparent cursor-pointer"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <NavigationMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        variant="mobile"
      />
    </header>
  );
}

export default Header;
