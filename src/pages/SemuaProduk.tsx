import SectionContainer from "../components/common/SectionContainer";
import SectionHeading from "../components/common/SectionHeading";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import FilterSidebar from "../features/semuaPesanan/components/FilterSidebar";
import type { FilterGroup } from "../features/semuaPesanan/components/FilterSidebar";

const filterGroups: FilterGroup[] = [
  {
    id: "bidang-studi",
    title: "Bidang Studi",
    type: "checkbox",
    options: [
      { label: "Pemasaran", value: "pemasaran" },
      { label: "Digital & Teknologi", value: "digital-teknologi" },
      { label: "Pengembangan Diri", value: "pengembangan-diri" },
      { label: "Bisnis Manajemen", value: "bisnis-manajemen" },
    ],
  },
  {
    id: "harga",
    title: "Harga",
    type: "checkbox",
    options: [
      { label: "Pemasaran", value: "pemasaran" },
      { label: "Digital & Teknologi", value: "digital-teknologi" },
      { label: "Pengembangan Diri", value: "pengembangan-diri" },
      { label: "Bisnis Manajemen", value: "bisnis-manajemen" },
    ],
  },
  {
    id: "durasi",
    title: "Durasi",
    type: "radio",
    options: [
      { label: "Kurang dari 4 Jam", value: "<4" },
      { label: "4 - 8 Jam", value: "4-8" },
      { label: "Lebih dari 8 Jam", value: ">8" },
    ],
  },
];

function SemuaProduk() {
  return (
    <LayoutBeranda>
      <SectionContainer>
        <SectionHeading
          title="Koleksi Video Pembelajaran Unggulan"
          subtitle="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
        />
        {/* CONTAINER UTAMA BANYAK DUA KOLOM */}
        <div className="flex flex-col lg:flex-row gap-8 items-start mt-8">
          {/* SECTION 1: FILTER (STICKY) */}
          <FilterSidebar groups={filterGroups} onReset={() => {}} />

          {/* SECTION 2: LIST KONTEN/PRODUK */}
          <main className="flex-1 w-full bg-white border border-[#e0e0e0] rounded-lg p-6 shadow-sm">
            {/* Bagian Bar Atas: Urutkan & Cari Kelas */}
            <div className="flex flex-col sm:flex-row justify-end items-center gap-4 mb-6">
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
                  className="w-full border border-gray-300 rounded px-4 py-2 pr-10 text-sm focus:outline-none focus:border-emerald-500"
                />
                <span className="absolute right-3 top-2.5 text-gray-400 text-sm">
                  🔍
                </span>
              </div>
            </div>

            {/* Grid List Card Produk */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tempatkan Komponen Card / Looping Produk Anda di Sini */}
              <div className="border border-gray-200 rounded-xl p-4 bg-slate-50 h-64 flex items-center justify-center text-gray-400">
                Card Produk 1
              </div>
              <div className="border border-gray-200 rounded-xl p-4 bg-slate-50 h-64 flex items-center justify-center text-gray-400">
                Card Produk 2
              </div>
              <div className="border border-gray-200 rounded-xl p-4 bg-slate-50 h-64 flex items-center justify-center text-gray-400">
                Card Produk 3
              </div>
              <div className="border border-gray-200 rounded-xl p-4 bg-slate-50 h-64 flex items-center justify-center text-gray-400">
                Card Produk 4
              </div>
              <div className="border border-gray-200 rounded-xl p-4 bg-slate-50 h-64 flex items-center justify-center text-gray-400">
                Card Produk 4
              </div>
              <div className="border border-gray-200 rounded-xl p-4 bg-slate-50 h-64 flex items-center justify-center text-gray-400">
                Card Produk 4
              </div>
              <div className="border border-gray-200 rounded-xl p-4 bg-slate-50 h-64 flex items-center justify-center text-gray-400">
                Card Produk 4
              </div>
              <div className="border border-gray-200 rounded-xl p-4 bg-slate-50 h-64 flex items-center justify-center text-gray-400">
                Card Produk 4
              </div>
              <div className="border border-gray-200 rounded-xl p-4 bg-slate-50 h-64 flex items-center justify-center text-gray-400">
                Card Produk 4
              </div>
            </div>
          </main>
        </div>
      </SectionContainer>
    </LayoutBeranda>
  );
}

export default SemuaProduk;
