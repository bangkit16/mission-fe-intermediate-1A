import React from "react";
import SectionContainer from "../../../../components/common/SectionContainer";
import SectionHeading from "../../../../components/common/SectionHeading";
import CourseCard from "../../../../components/common/CourseCard";

// ================================================
// Types
// ================================================
export interface CourseData {
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
  price: string;
}

export interface RelatedCoursesProps {
  /** Daftar course terkait */
  courses: CourseData[];
}

// ================================================
// Component
// ================================================
export const RelatedCourses: React.FC<RelatedCoursesProps> = ({ courses }) => {
  return (
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
            to={`/produk/${course.title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "dan").replace(/[^a-z0-9-]/g, "")}`}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

RelatedCourses.displayName = "RelatedCourses";
