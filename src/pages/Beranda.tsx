import { useState } from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import CourseCard from "../components/common/CourseCard";
import SectionHeading from "../components/common/SectionHeading";
import SectionContainer from "../components/common/SectionContainer";
import OverlaySection from "../features/beranda/components/OverlaySection";
import TabLink from "../components/common/TabLink";
import NewsletterSection from "../features/beranda/components/NewsletterSection";
import { getAllCourses, type Course } from "../services/api/courseService";
import {
  getAllCategories,

} from "../services/api/categoriesService";


function Beranda() {
  const [activeTab, setActiveTab] = useState("all");

  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: getAllCourses,
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  const filteredCourses =
    activeTab === "all"
      ? courses
      : courses.filter((c) => c.category === activeTab);

  return (
    <LayoutBeranda>
      {/* HERO SECTION */}
      <OverlaySection
        bgImage="https://picsum.photos/1400/800?education"
        overlayOpacity={58}
        contentClassName="max-w-[850px]"
      >
        <h1 className="text-3xl md:text-[34px] lg:text-[38px] xl:text-5xl leading-tight font-extrabold mb-5">
          Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
          Interaktif!
        </h1>
        <p className="text-[15px] md:text-base text-[#f0f0f0] mb-7">
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
          pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
          berpartisipasi dalam latihan interaktif yang akan meningkatkan
          pemahaman Anda.
        </p>
        <Link
          to="/produk"
          className="w-full md:w-auto inline-block px-4 md:px-8 py-3.5 bg-[#3ECF4C] text-white font-bold rounded-[10px] hover:bg-[#28b864] transition-all duration-300"
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
          {categories.map((tab) => (
            <TabLink
              key={tab.slug}
              label={tab.label}
              active={activeTab === tab.slug}
              onClick={() => setActiveTab(tab.slug)}
            />
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course: Course, index) => (
            <CourseCard
              key={index}
              image={course.image}
              title={course.title}
              description={course.description}
              instructor={course.instructor}
              rating={course.rating}
              reviewCount={course.reviewCount}
              price={course.price}
              to={`/produk/${index}`}
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
