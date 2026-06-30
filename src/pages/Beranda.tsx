import { Link } from "react-router";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import CourseCard from "../features/beranda/components/CourseCard";
import SectionHeading from "../components/common/SectionHeading";
import SectionContainer from "../components/common/SectionContainer";
import OverlaySection from "../features/beranda/components/OverlaySection";
import TabLink from "../components/common/TabLink";
import NewsletterSection from "../features/beranda/components/NewsletterSection";

/* ── Data dummy ── */
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

/* ── Tabs ── */
const tabs = [
  { label: "Semua Kelas", active: true },
  { label: "Pemasaran" },
  { label: "Desain" },
  { label: "Pengembangan Diri" },
  { label: "Bisnis" },
];

function Beranda() {
  return (
    <LayoutBeranda>
      {/* HERO SECTION */}
      <OverlaySection
        bgImage="https://picsum.photos/1400/800?education"
        overlayOpacity={58}
        contentClassName="max-w-[850px]"
      >
        <h1 className="text-5xl max-lg:text-[38px] max-md:text-[34px] max-[480px]:text-3xl leading-tight font-extrabold mb-5">
          Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
          Interaktif!
        </h1>
        <p className="text-base max-md:text-[15px] text-[#f0f0f0] mb-7">
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
          pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
          berpartisipasi dalam latihan interaktif yang akan meningkatkan
          pemahaman Anda.
        </p>
        <Link
          to="/login"
          className="inline-block px-8 max-md:px-4 py-3.5 bg-[#3ECF4C] text-white font-bold rounded-[10px] hover:bg-[#28b864] transition-all duration-300 max-md:w-full"
        >
          Temukan Video Course untuk Dipelajari!
        </Link>
      </OverlaySection>

      {/* COURSE SECTION */}
      <SectionContainer>
        <SectionHeading
          title="Koleksi Video Pembelajaran Unggulan"
          subtitle="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
        />

        {/* Tabs */}
        <div className="flex gap-7 overflow-x-auto mb-8 pb-2.5">
          {tabs.map((tab) => (
            <TabLink key={tab.label} label={tab.label} active={tab.active} />
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
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
      </SectionContainer>

      {/* NEWSLETTER SECTION */}
      <NewsletterSection />
    </LayoutBeranda>
  );
}

export default Beranda;
