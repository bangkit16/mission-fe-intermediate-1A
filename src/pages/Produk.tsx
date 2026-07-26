import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Breadcrumb from "../components/common/Breadcrumb";
import SectionContainer from "../components/common/SectionContainer";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import BannerProduct from "../features/produk/components/BannerProduct";
import CheckoutCard from "../features/produk/components/CheckoutCard";
import { InstructorCard } from "../features/produk/components/InstructorCard";
import { ProductDescription } from "../features/produk/components/ProductDescription";
import { SyllabusAccordion } from "../features/produk/components/SyllabusAccordion";
import { ProductReviews } from "../features/produk/components/ProductReviews";
import { RelatedCourses } from "../features/produk/components/RelatedCourses";
import Card from "../components/common/Card";
import {
  getCourseById,
  getAllCourses,
  type Course,
} from "../services/api/courseService";

// interface RelatedItem {
//   image: string;
//   title: string;
//   description: string;
//   instructor: { name: string; role: string; company: string; avatar: string };
//   rating: number;
//   reviewCount: number;
//   price: string;
// }

function Produk() {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [relatedCourses, setRelatedCourses] = useState<Course[]>([]);
  const [openModuleId, setOpenModuleId] = useState<string | null>("m1");

  useEffect(() => {
    if (!id) return;
    getCourseById(id).then(setCourse);
    getAllCourses().then((all) => {
      setRelatedCourses(
        all
          .filter((c) => c.id !== id)
          .slice(0, 3)
      );
    });
  }, [id]);

  const toggleModule = (id: string) => {
    setOpenModuleId(openModuleId === id ? null : id);
  };

  if (!course) {
    return (
      <LayoutBeranda>
        <SectionContainer>
          <p className="py-20 text-center text-gray-500">Memuat...</p>
        </SectionContainer>
      </LayoutBeranda>
    );
  }

  return (
    <LayoutBeranda>
      <SectionContainer>
        <Breadcrumb
          items={[
            { label: "Semua Produk", href: "/produk" },
            { label: course.title },
          ]}
        />
        <BannerProduct
          bgImage="https://picsum.photos/1400/800?education"
          title={course.title}
          description={course.description}
        />
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-start ">
          <main className="flex-1 w-full ">
            <ProductDescription description={course.description} />

            <Card className="p-2 md:p-4 mb-5">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl md:text-2xl leading-tight font-bold mb-5">
                    Belajar bersama Tutor Profesional
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {course.instructors?.map((instructor) => (
                      <InstructorCard
                        name={instructor.name}
                        role={instructor.role}
                        company={instructor.company}
                        avatar={instructor.avatar}
                        description="Foundations of User Experience (UX) Design adalah yang pertama dari rangkaian tujuh kursus yang akan membekali"
                      />
                    ))}
                    {/* <InstructorCard
                      name={instructor.name}
                      role={instructor.role}
                      company={instructor.company}
                      avatar={instructor.avatar}
                      description="Foundations of User Experience (UX) Design adalah yang pertama dari rangkaian tujuh kursus yang akan membekali"
                    />
                    <InstructorCard
                      name={instructor.name}
                      role={instructor.role}
                      company={instructor.company}
                      avatar={instructor.avatar}
                      description="Foundations of User Experience (UX) Design adalah yang pertama dari rangkaian tujuh kursus yang akan membekali"
                    /> */}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-2 md:p-4 mb-5">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6">
                Kamu akan Mempelajari
              </h2>
              <SyllabusAccordion
                modules={course.syllabus}
                openModuleId={openModuleId}
                onToggleModule={toggleModule}
              />
            </Card>

            <ProductReviews reviews={course.reviews.slice(0, 2)} />
          </main>
          <CheckoutCard course={course} checkoutLink={`/produk/${id}/metode`} />
        </div>
      </SectionContainer>
      <RelatedCourses courses={relatedCourses} />
    </LayoutBeranda>
  );
}

export default Produk;
