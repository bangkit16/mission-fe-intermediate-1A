import React from "react";

function Header() {
  return (
    <header className="bg-white border-b border-[#ececec] sticky top-0 z-50">
      <div className="max-w-[1200px] w-[90%] mx-auto h-[72px] flex justify-between items-center">
        <a
          href="/"
          className="text-[#f3b02e] text-[32px] font-extrabold leading-none"
        >
          <img src="/Logo.png" alt="Logo" className="block" />
        </a>

        <nav className="flex items-center gap-[18px] max-md:hidden">
          <a
            href="/login"
            className="text-[15px] no-underline text-inherit text-[#555]"
          >
            Kategori
          </a>
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </nav>

        <button className="hidden max-md:block bg-transparent text-[28px] cursor-pointer leading-none">
          &#9776;
        </button>
      </div>
    </header>
  );
}

export default Header;
