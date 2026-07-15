import React from "react";
import useIsMobile from "../../../hooks/useIsMobile";

function VideoScreen() {
  const isMobile = useIsMobile();
  return (
    <div
      className={` w-full h-full ${
        isMobile ? "flex flex-col" : "flex-1 flex flex-col overflow-hidden"
      }
            `}
    >
      {/* VIDEO */}
      <section
        className={`bg-[#1a1a1a] flex items-center justify-center   relative  ${
          isMobile ? "max-h-[30vh] overflow-auto" : "max-h-[58vh]"
        }`}
      >
        {/* <img src="try-again.png" className="w-full" alt="" /> */}
        <div className=" w-250 h-120 flex items-center justify-center md:px-28 bg-gray-700">
          <div className="w-18 h-18 rounded-full bg-white flex items-center justify-center text-xl shadow-lg cursor-pointer pl-1 text-gray-800 hover:scale-105 transition-transform">
            ▶
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section
        className={`bg-white py-8 md:px-10 ${
          isMobile ? "max-h-52 overflow-y-auto" : " overflow-y-auto "
        }`}
      >
        <div className="md:px-18 px-5 mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Download Rangkuman Modul
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Silakan download rangkuman modul dari materi yang telah kamu
            pelajari
          </p>

          <button className="inline-flex items-center gap-2 border border-[#22c55e] rounded-xl bg-white px-5 py-2.5 text-[#22c55e] text-sm font-bold hover:bg-green-50 transition-colors">
            <span className="text-xs bg-[#22c55e] text-white rounded px-1 py-0.5">
              ↓
            </span>{" "}
            Download Rangkuman
          </button>
        </div>
      </section>
    </div>
  );
}

export default VideoScreen;
