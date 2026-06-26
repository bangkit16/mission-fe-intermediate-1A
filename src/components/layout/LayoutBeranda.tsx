import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function LayoutBeranda({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default LayoutBeranda;
