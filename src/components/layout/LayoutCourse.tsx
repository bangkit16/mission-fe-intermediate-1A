import React from "react";
import Header from "../course/Header";
import Footer from "../course/Footer";

function LayoutCourse({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen max-w-full">
      <Header />
      {/* <main className="flex-1  flex flex-row  bg-red-500 bg-red"> */}
        {children}
      {/* </main> */}
      <Footer />
    </div>
  );
}

export default LayoutCourse;
