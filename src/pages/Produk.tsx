import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import SectionContainer from "../components/common/SectionContainer";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import BannerProduct from "../features/produk/components/BannerProduct";
import CheckoutCard from "../features/produk/components/CheckoutCard";

function Produk() {
  return (
    <LayoutBeranda>
      <SectionContainer>
        <Breadcrumb
          items={[
            {
              label: "Dashboard",
              href: "/dashboard",
            },
            { label: "Beljar Menyenangkan Sekali hokya hokya" },
          ]}
        />
        <BannerProduct
          bgImage="https://picsum.photos/1400/800?education"
          title="Belajar Menyenangkan"
          description="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi."
        />
        <div className="flex flex-col lg:flex-row gap-8 items-start mt-8">
          <main className="flex-1 w-full md:p-6 bg-white">
            {/* Bagian Bar Atas: Urutkan & Cari Kelas */}
            <div className="flex justify-end items-center gap-4 mb-6">
              {/* Dropdown Urutkan */}
              <div className="relative">
                <button className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 text-sm text-gray-600 bg-white hover:bg-gray-50">
                  Urutkan <span className="text-xs">▼</span>
                </button>
              </div>
              {/* Input Pencarian */}
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Cari Kelas"
                  className="w-full border bg-white border-gray-300 rounded px-4 py-2 pr-10 text-sm focus:outline-none focus:border-emerald-500"
                />
                <span className="absolute right-3 top-2.5 text-gray-400 text-sm">
                  🔍
                </span>
              </div>
            </div>
          </main>
          <CheckoutCard />
        </div>
      </SectionContainer>
    </LayoutBeranda>
  );
}

export default Produk;
