import React, { useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import SectionContainer from "../components/common/SectionContainer";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import BannerProduct from "../features/produk/components/BannerProduct";
import CheckoutCard from "../features/produk/components/CheckoutCard";
import Card from "../components/common/Card";
// Menambahkan Star dari lucide-react untuk seksi Rating dan Review
import { ChevronDown, ChevronUp, PlayCircle, Clock, Star } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import CourseCard from "../components/common/CourseCard";

const instructor = {
  name: "Jessica Tan",
  role: "Mobile Developer",
  company: "tiket.com",
  avatar: "https://i.pravatar.cc/40?img=7",
};
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
];

// Mock data untuk silabus materi berdasarkan gambar image_c161e5.png
const syllabusModules = [
  {
    id: "m1",
    title: "Introduction to Course 1: Foundations of User Experience Design",
    lessons: [
      {
        id: "l1",
        title: "The basics of user experience design",
        type: "Video",
        duration: "12 Menit",
      },
      {
        id: "l2",
        title: "Jobs in the field of user experience",
        type: "Video",
        duration: "12 Menit",
      },
      {
        id: "l3",
        title: "The product development life cycle",
        type: "Video",
        duration: "12 Menit",
      },
    ],
  },
  {
    id: "m2",
    title: "Universal design, inclusive design, and equity-focused design",
    lessons: [],
  },
  {
    id: "m3",
    title: "Introduction to design sprints",
    lessons: [],
  },
  {
    id: "m4",
    title: "Introduction to UX research",
    lessons: [],
  },
];

// Mock data untuk seksi Rating dan Review berdasarkan gambar image_c1d9e0.png
const reviews = [
  {
    id: "r1",
    name: "Gregorius Edrik Lawanto",
    batch: "Alumni Batch 2",
    avatar: "https://i.pravatar.cc/40?img=12",
    comment:
      "Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
    rating: 3.5,
  },
  {
    id: "r2",
    name: "Gregorius Edrik Lawanto",
    batch: "Alumni Batch 4",
    avatar: "https://i.pravatar.cc/40?img=12",
    comment:
      "Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
    rating: 3.5,
  },
];

function Produk() {
  // State untuk mengontrol modul mana yang sedang terbuka (default: modul pertama)
  const [openModuleId, setOpenModuleId] = useState<string | null>("m1");

  const toggleModule = (id: string) => {
    setOpenModuleId(openModuleId === id ? null : id);
  };

  return (
    <LayoutBeranda>
      <SectionContainer>
        <Breadcrumb
          items={[
            {
              label: "Dashboard",
              href: "/dashboard",
            },
            { label: "Belajar Menyenangkan Sekali hokya hokya" },
          ]}
        />
        <BannerProduct
          bgImage="https://picsum.photos/1400/800?education"
          title="Belajar Menyenangkan"
          description="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi."
        />
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-start ">
          <main className="flex-1 w-full ">
            <Card className="p-2 md:p-4 mb-5">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl md:text-2xl leading-tight font-bold mb-5">
                    Deskripsi
                  </h1>
                  <p className="text-sm md:text-base text-gray-500">
                    Foundations of User Experience (UX) Design adalah yang
                    pertama dari rangkaian tujuh kursus yang akan membekali Anda
                    dengan keterampilan yang dibutuhkan untuk melamar pekerjaan
                    tingkat pemula dalam desain pengalaman pengguna. Desainer UX
                    fokus pada interaksi yang dilakukan orang dengan produk
                    situs web, aplikasi seluler, dan objek fisik. Desainer UX
                    membuat interaksi sehari-hari itu dapat digunakan,
                    menyenangkan, dan dapat diakses. Peran seorang desainer UX
                    tingkat pemula mungkin termasuk berempati dengan pengguna,
                    menentukan poin rasa sakit mereka, memunculkan ide untuk
                    solusi desain, membuat wireframe, prototipe, dan maket, dan
                    menguji desain untuk mendapatkan umpan balik.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-2 md:p-4 mb-5">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl md:text-2xl leading-tight font-bold mb-5">
                    Beljar bersama Tutor Profesional
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <Card className="mb-5">
                      <div className="flex items-center gap-2 mt-1 md:gap-2.5 m">
                        <img
                          src={instructor.avatar}
                          alt={instructor.name}
                          className="w-7 h-7 rounded-xl md:w-10 md:h-10"
                        />
                        <div className="min-w-0">
                          <h4 className="text-[13px] font-semibold leading-tight truncate md:text-base">
                            {instructor.name}
                          </h4>
                          <span className="text-[11px] text-gray-400 line-clamp-1 md:text-sm">
                            {instructor.role}{" "}
                            <span className="hidden md:inline ">
                              {" di "}
                              <span className="font-semibold text-gray-600 ">
                                {instructor.company}{" "}
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                      <p className="text-sm md:text-base font-normal text-gray-900 mt-4">
                        Foundations of User Experience (UX) Design adalah yang
                        pertama dari rangkaian tujuh kursus yang akan membekali
                      </p>
                    </Card>
                    <Card className="mb-5">
                      <div className="flex items-center gap-2 mt-1 md:gap-2.5 m">
                        <img
                          src={instructor.avatar}
                          alt={instructor.name}
                          className="w-7 h-7 rounded-xl md:w-10 md:h-10"
                        />
                        <div className="min-w-0">
                          <h4 className="text-[13px] font-semibold leading-tight truncate md:text-base">
                            {instructor.name}
                          </h4>
                          <span className="text-[11px] text-gray-400 line-clamp-1 md:text-sm">
                            {instructor.role}{" "}
                            <span className="hidden md:inline ">
                              {" di "}
                              <span className="font-semibold text-gray-600 ">
                                {instructor.company}{" "}
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                      <p className="text-sm md:text-base font-normal text-gray-900 mt-4">
                        Foundations of User Experience (UX) Design adalah yang
                        pertama dari rangkaian tujuh kursus yang akan membekali
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-2 md:p-4 mb-5">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6">
                Kamu akan Mempelajari
              </h2>

              <div className="space-y-5">
                {syllabusModules.map((module) => {
                  const isOpen = openModuleId === module.id;

                  return (
                    <div
                      key={module.id}
                      className="border-b border-gray-50 last:border-none pb-2 last:pb-0"
                    >
                      {/* Accordion Trigger Header */}
                      <button
                        type="button"
                        onClick={() => toggleModule(module.id)}
                        className="w-full flex items-center justify-between text-left group py-2 focus:outline-none"
                      >
                        <span className="text-sm md:text-base font-semibold text-[#22C55E] group-hover:text-green-600 transition-colors duration-200 pr-4">
                          {module.title}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>

                      {/* Accordion Content (List Pelajaran) */}
                      {isOpen && module.lessons.length > 0 && (
                        <div className="mt-4 space-y-3 pl-0.5">
                          {module.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-all duration-200 gap-3"
                            >
                              <span className="text-xs md:text-sm font-medium text-gray-800">
                                {lesson.title}
                              </span>

                              {/* Metadata info */}
                              <div className="flex items-center gap-4 text-xs font-medium text-gray-500 flex-shrink-0">
                                <div className="flex items-center gap-1.5">
                                  <PlayCircle className="w-4 h-4 text-gray-400" />
                                  <span>{lesson.type}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <Clock className="w-4 h-4 text-gray-400" />
                                  <span>{lesson.duration}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="p-4 md:p-6 mb-5">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Rating dan Review
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="p-5 bg-white border border-gray-200 rounded-xl flex flex-col justify-between gap-4"
                  >
                    <div>
                      {/* User Header */}
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 flex items-center justify-center overflow-hidden shrink-0">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-10 h-10 object-cover rounded-xl"
                          />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-base font-bold text-gray-900 truncate">
                            {review.name}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {review.batch}
                          </p>
                        </div>
                      </div>

                      {/* Review Comment */}
                      <p className="text-sm md:text-base text-gray-700 font-normal leading-relaxed mt-4">
                        {review.comment}
                      </p>
                    </div>

                    {/* Star Ratings */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => {
                          const isFilled = star <= Math.floor(review.rating);
                          const isHalf =
                            !isFilled &&
                            star === Math.ceil(review.rating) &&
                            review.rating % 1 !== 0;

                          return (
                            <Star
                              key={star}
                              className={`w-5 h-5 ${
                                isFilled
                                  ? "text-[#FBBF24] fill-[#FBBF24]"
                                  : isHalf
                                    ? "text-[#FBBF24] fill-[#FBBF24] opacity-50" // representasi simpel bintang setengah
                                    : "text-gray-200 fill-gray-200"
                              }`}
                            />
                          );
                        })}
                      </div>
                      <span className="text-sm font-semibold text-gray-600 ml-1">
                        {review.rating}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </main>
          <CheckoutCard isCheckoutButtonDisabled={false} />
        </div>
      </SectionContainer>
      <SectionContainer>
        <SectionHeading
          title="Video Pembelajaran Terkait Lainnya"
          subtitle="Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!"
          className="mt-5"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    </LayoutBeranda>
  );
}

export default Produk;
