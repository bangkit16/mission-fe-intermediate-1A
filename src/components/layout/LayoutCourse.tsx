import React from "react";
import Header from "../course/Header";

function LayoutCourse({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen max-w-full">
      <Header />
      <main className="flex-1 flex flex-col mx-12 bg-red-500  px-3 py-4 bg-red">
        {children}
      </main>
    </div>
  );
}

export default LayoutCourse;
