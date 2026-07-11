import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
// import NavigationMenu from "./NavigationMenu";

function Footer() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <footer className="bg-white border-b border-gray-200 z-50 flex justify-center ">
      <div className="w-full  mx-12 h-18 flex justify-between items-center bg-orange-200"></div>
    </footer>
  );
}

export default Footer;
