import React, { useState } from "react";
import SectionContainer from "../components/common/SectionContainer";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import Breadcrumb from "../components/common/Breadcrumb";

function Sertifikat() {
  return (
    <LayoutBeranda>
      <SectionContainer>
        <Breadcrumb
          items={[
            {
              label: "Semua Produk",
              href: "/produk",
            },
            { label: "Belajar Menyenangkan" },
          ]}
        />

        {/* Container Utama */}
        <div className="flex flex-col lg:flex-row gap-8 items-start w-full mt-6">
          {/* Card Box Sertifikat */}
          <div className="w-full bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col gap-6">
            {/* Area Preview Sertifikat dengan Background Hijau Muda */}
            <div className="w-full bg-[#f2f9f5] rounded-xl py-8 px-4 flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[400px]">
              <img
                src="certificate-preview.png" // Ganti dengan asset gambar sertifikat Anda
                alt="Certificate of Completion"
                className="w-full max-w-2xl h-auto object-contain rounded-lg shadow-md bg-white"
              />
            </div>

            {/* Area Informasi & Aksi */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
              {/* Kolom Kiri: Detail Kelas & Instruktur */}
              <div className="flex-1 flex flex-col gap-3">
                <h1 className="text-xl md:text-2xl font-bold text-gray-900 tracking-wide">
                  Big 4 Auditor Financial Analyst
                </h1>

                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  Mulai transformasi dengan instruktur profesional, harga yang
                  terjangkau, dan kurikulum terbaik
                </p>

                {/* Profil Instruktur */}
                <div className="flex items-center gap-3 mt-1">
                  <img
                    src="avatar-jenna.png" // Ganti dengan asset avatar instruktur
                    alt="Jenna Ortega"
                    className="w-10 h-10 rounded-full object-cover bg-amber-100"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-gray-800">
                      Jenna Ortega
                    </span>
                    <span className="text-xs text-gray-400 font-medium">
                      Senior Accountant di{" "}
                      <span className="font-semibold text-gray-500">Gojek</span>
                    </span>
                  </div>
                </div>

                {/* Rating Bintang */}
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex text-amber-400 text-lg">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-200">★</span>
                    <span className="text-gray-200">★</span>
                  </div>
                  <span className="text-xs font-bold text-gray-400 mt-0.5">
                    3.5 <span className="font-normal text-gray-400">(86)</span>
                  </span>
                </div>
              </div>

              {/* Kolom Kanan: Tombol Download */}
              <div className="shrink-0">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 border border-[#22c55e] rounded-xl bg-white px-5 py-3 text-[#22c55e] text-sm md:text-base font-bold hover:bg-green-50/50 transition-colors w-full md:w-auto"
                >
                  {/* Download Icon (SVG) */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
                  </svg>
                  Download Sertifikat
                </button>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </LayoutBeranda>
  );
}

export default Sertifikat;
