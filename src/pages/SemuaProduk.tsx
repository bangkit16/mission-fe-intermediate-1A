import { useEffect, useState } from "react";
import Pagination from "../components/common/Pagination";
import SectionContainer from "../components/common/SectionContainer";
import SectionHeading from "../components/common/SectionHeading";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import CourseCard from "../components/common/CourseCard";
import FilterSidebar from "../features/semuaProduk/components/FilterSidebar";
import type { FilterGroup } from "../features/semuaProduk/components/FilterSidebar";
import { getAllCourses } from "../services/api/courseService";

interface CourseData {
  id: string;
  image: string;
  title: string;
  description: string;
  instructor: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  };
  rating: number;
  reviewCount: number;
  price: number;
}

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
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<
    "default" | "termurah" | "termahal" | "rating"
  >("default");
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  useEffect(() => {
    getAllCourses().then((courses) => {
      setCourses(courses);
    });
  }, []);

  // Filter course berdasarkan pencarian
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Urutkan course
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortOrder === "termurah") return a.price - b.price;
    if (sortOrder === "termahal") return b.price - a.price;
    if (sortOrder === "rating") return b.rating - a.rating;
    return 0;
  });

  const sortLabels: Record<string, string> = {
    default: "Urutkan",
    termurah: "Termurah",
    termahal: "Termahal",
    rating: "Rating Tertinggi",
  };

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
          <main className="flex-1 w-full md:p-6 ">
            {/* Bagian Bar Atas: Urutkan & Cari Kelas */}
            <div className="flex justify-end items-center gap-4 mb-6">
              {/* Dropdown Urutkan */}
              <div className="relative">
                <button
                  onClick={() => setShowSortDropdown((prev) => !prev)}
                  className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 text-sm text-gray-600 bg-white hover:bg-gray-50"
                >
                  {sortLabels[sortOrder]} <span className="text-xs">▼</span>
                </button>
                {showSortDropdown && (
                  <div className="absolute right-0 top-full mt-1 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {(
                      ["default", "termurah", "termahal", "rating"] as const
                    ).map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setSortOrder(opt);
                          setShowSortDropdown(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${sortOrder === opt ? "font-bold text-emerald-600" : "text-gray-600"}`}
                      >
                        {sortLabels[opt]}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {/* Input Pencarian */}
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Cari Kelas"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full border bg-white border-gray-300 rounded px-4 py-2 pr-10 text-sm focus:outline-none focus:border-emerald-500"
                />
                <span className="absolute right-3 top-2.5 text-gray-400 text-sm">
                  🔍
                </span>
              </div>
            </div>

            {/* Grid List Card Produk */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedCourses.map((course, index) => (
                <CourseCard
                  key={index}
                  image={course.image}
                  title={course.title}
                  description={course.description}
                  instructor={course.instructor}
                  rating={course.rating}
                  reviewCount={course.reviewCount}
                  price={course.price}
                  to={`/produk/${course.id}`}
                />
              ))}
            </div>
            <div className="flex justify-center md:justify-end mt-8">
              <Pagination
                currentPage={currentPage}
                totalPages={5}
                onPageChange={setCurrentPage}
              />
            </div>
          </main>
        </div>
      </SectionContainer>
    </LayoutBeranda>
  );
}

export default SemuaProduk;
