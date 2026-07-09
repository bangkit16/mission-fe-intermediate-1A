import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
// import NavigationMenu from "./NavigationMenu";

function Header() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 flex justify-center ">
      <div className="w-full  mx-12 h-18 flex justify-between items-center bg-blue-500"></div>
    </header>
  );
}

export default Header;
