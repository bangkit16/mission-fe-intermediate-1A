import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <div className="min-h-screen bg-[#f8f7f2] text-[#222] leading-relaxed">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
