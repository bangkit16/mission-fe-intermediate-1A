import React from "react";
import Header from "./Header";

function LayoutAuth({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default LayoutAuth;
