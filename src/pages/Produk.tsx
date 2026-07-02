import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import SectionContainer from "../components/common/SectionContainer";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import BannerProduct from "../features/produk/components/BannerProduct";
import CheckoutCard from "../features/produk/components/CheckoutCard";
import Card from "../components/common/Card";

const instructor = {
  name: "Jessica Tan",
  role: "Mobile Developer",
  company: "tiket.com",
  avatar: "https://i.pravatar.cc/40?img=7",
};

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
        <div className="flex flex-col lg:flex-row gap-8 items-start ">
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
                    seperti situs web, aplikasi seluler, dan objek fisik.
                    Desainer UX membuat interaksi sehari-hari itu dapat
                    digunakan, menyenangkan, dan dapat diakses. Peran seorang
                    desainer UX tingkat pemula mungkin termasuk berempati dengan
                    pengguna, menentukan poin rasa sakit mereka, memunculkan ide
                    untuk solusi desain, membuat wireframe, prototipe, dan
                    maket, dan menguji desain untuk mendapatkan umpan balik.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-2 md:p-4 mb-5">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl md:text-2xl leading-tight font-bold mb-5">
                    Belajar bersama Tutor Profesional
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
          </main>
          <CheckoutCard />
        </div>
      </SectionContainer>
    </LayoutBeranda>
  );
}

export default Produk;
