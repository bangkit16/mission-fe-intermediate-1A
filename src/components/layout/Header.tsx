import { Link } from "react-router";

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-300 w-[90%] mx-auto h-18 flex justify-between items-center">
        <Link to="/" className="text-[#f3b02e] text-[32px] font-extrabold leading-none">
          <img src="/Logo.png" alt="Logo" className="block" />
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-sm no-underline text-gray-600">
            Kategori
          </Link>
          <img src="https://i.pravatar.cc/40" alt="Profile" className="w-10 h-10 rounded-full" />
        </nav>

        <button className="block md:hidden bg-transparent text-3xl cursor-pointer leading-none">
          &#9776;
        </button>
      </div>
    </header>
  );
}

export default Header;
