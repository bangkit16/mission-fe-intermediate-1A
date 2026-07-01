import Pagination from "../components/common/Pagination";
import SectionContainer from "../components/common/SectionContainer";
import SectionHeading from "../components/common/SectionHeading";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import CourseCard from "../components/common/CourseCard";
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

const courses = [
  {
    image: "https://picsum.photos/400/250?1",
    title: "Full-Stack Web Development Bootcamp",
    description:
      "Kuasai JavaScript, React, dan Node.js dari dasar hingga siap kerja dalam 3 bulan. Belajar bersama mentor profesional. lorem ipsum dolor sit amet",
    instructor: {
      name: "Rian Hidayat",
      role: "Senior Software Engineer",
      company: "Gojek",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    rating: 4.8,
    reviewCount: 342,
    price: "Rp 450K",
  },
  {
    image: "https://picsum.photos/400/250?3",
    title: "UI/UX Design Masterclass",
    description:
      "Belajar UI/UX modern menggunakan Figma dengan studi kasus proyek aplikasi nyata.",
    instructor: {
      name: "Dewi Lestari",
      role: "Lead Product Designer",
      company: "Tokopedia",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    rating: 4.7,
    reviewCount: 189,
    price: "Rp 350K",
  },
  {
    image: "https://picsum.photos/400/250?9",
    title: "Data Science & Machine Learning",
    description:
      "Mulai karir data analitik dengan menguasai Python, SQL, dan visualisasi data.",
    instructor: {
      name: "Budi Santoso",
      role: "Data Scientist Specialist",
      company: "Bukalapak",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    rating: 4.5,
    reviewCount: 95,
    price: "Rp 500K",
  },
  {
    image: "https://picsum.photos/400/250?2",
    title: "Digital Marketing Specialist",
    description:
      "Strategi jitu optimasi SEO, Google Ads, dan Copywriting untuk menaikkan penjualan.",
    instructor: {
      name: "Siti Rahma",
      role: "Growth Marketing Manager",
      company: "Shopee",
      avatar: "https://i.pravatar.cc/40?img=4",
    },
    rating: 4.6,
    reviewCount: 213,
    price: "Rp 250K",
  },
  {
    image: "https://picsum.photos/400/250?4",
    title: "Product Management Fundamental",
    description:
      "Pelajari framework manajemen produk, riset user, hingga peluncuran fitur sukses.",
    instructor: {
      name: "Andi Wijaya",
      role: "Senior Product Manager",
      company: "Blibli",
      avatar: "https://i.pravatar.cc/40?img=5",
    },
    rating: 4.4,
    reviewCount: 76,
    price: "Rp 300K",
  },
  {
    image: "https://picsum.photos/400/250?8",
    title: "Cyber Security & Ethical Hacking",
    description:
      "Pahami celah keamanan jaringan, enkripsi, dan teknik penetrasi sistem komputer.",
    instructor: {
      name: "Fahmi Idris",
      role: "Security Analyst",
      company: "Dana",
      avatar: "https://i.pravatar.cc/40?img=6",
    },
    rating: 4.9,
    reviewCount: 154,
    price: "Rp 600K",
  },
  {
    image: "https://picsum.photos/400/250?6",
    title: "Mobile App Development with Flutter",
    description:
      "Bangun aplikasi Android dan iOS sekaligus menggunakan satu codebase framework Flutter.",
    instructor: {
      name: "Jessica Tan",
      role: "Mobile Developer",
      company: "tiket.com",
      avatar: "https://i.pravatar.cc/40?img=7",
    },
    rating: 4.6,
    reviewCount: 112,
    price: "Rp 400K",
  },
  {
    image: "https://picsum.photos/400/250?7",
    title: "DevOps Engineering Roadmap",
    description:
      "Otomatisasi deploy software menggunakan Docker, Kubernetes, dan CI/CD pipeline.",
    instructor: {
      name: "Kevin Pratama",
      role: "DevOps Engineer",
      company: "Traveloka",
      avatar: "https://i.pravatar.cc/40?img=8",
    },
    rating: 4.7,
    reviewCount: 88,
    price: "Rp 550K",
  },
  {
    image: "https://picsum.photos/400/250?10",
    title: "Python for Automation & Scripting",
    description:
      "Tingkatkan produktivitas kerja dengan membuat bot dan skrip otomatisasi Python.",
    instructor: {
      name: "Eka Putri",
      role: "Automation Engineer",
      company: "Telkom",
      avatar: "https://i.pravatar.cc/40?img=9",
    },
    rating: 4.3,
    reviewCount: 140,
    price: "Rp 200K",
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
          <main className="flex-1 w-full md:p-6 ">
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

            {/* Grid List Card Produk */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <CourseCard
                  key={index}
                  image={course.image}
                  title={course.title}
                  description={course.description}
                  instructor={course.instructor}
                  rating={course.rating}
                  reviewCount={course.reviewCount}
                  price={course.price}
                />
              ))}
            </div>
            <div className="flex justify-center md:justify-end mt-8">
              <Pagination
                currentPage={4}
                totalPages={5}
                onPageChange={() => {}}
              />
            </div>
          </main>
        </div>
      </SectionContainer>
    </LayoutBeranda>
  );
}

export default SemuaProduk;
