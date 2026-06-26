import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="min-h-screen bg-[#f8f7f2] text-[#222] leading-relaxed">
      <Outlet />
    </div>
  );
}

export default Layout;
