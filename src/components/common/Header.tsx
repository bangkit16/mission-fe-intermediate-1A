import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useSelector } from "react-redux";
import NavigationMenu from "./NavigationMenu";
import CheckoutProgress from "./CheckoutProgress";
import { selectIsAuthenticated, selectUser } from "../../store/authSlice";

interface HeaderProps {
  /** When set, replaces Kategori + Profile with checkout progress bar in desktop */
  checkoutStep?: 1 | 2 | 3;
}

function Header({ checkoutStep }: HeaderProps) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

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
        {checkoutStep ? (
          <nav className="hidden md:flex items-center min-w-0 ml-4">
            <CheckoutProgress currentStep={checkoutStep} compact />
          </nav>
        ) : (
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/produk"
              className="text-sm text-gray-600 hover:text-black transition"
            >
              Kategori
            </Link>

            {isAuthenticated ? (
              <div className="relative">
                <button onClick={() => setProfileOpen((prev) => !prev)}>
                  <img
                    src={user?.profileImage || "https://i.pravatar.cc/40"}
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
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="px-5 py-2 bg-[#3ECF4C] text-white font-bold rounded-[10px] hover:bg-[#28b864] transition-all duration-300 border border-[#3ECF4C]"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2 bg-white text-[#3ECF4C] font-bold rounded-[10px] hover:bg-[#28b864] transition-all duration-300 border border-[#3ECF4C]"
                >
                  Register
                </Link>
              </div>
            )}
          </nav>
        )}

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
