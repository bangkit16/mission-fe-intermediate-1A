import { useState } from "react";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Pagination from "../components/common/Pagination";
import SectionContainer from "../components/common/SectionContainer";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import Card from "../components/common/Card";
import { KelasSidebar } from "../features/kelas/components/KelasSidebar";
import { KelasFilterTabs } from "../features/kelas/components/KelasFilterTabs";
import { KelasSearchBar } from "../features/kelas/components/KelasSearchBar";
import {
  CourseProgressCard,
} from "../features/kelas/components/CourseProgressCard";
import { getAllMyClasses } from "../services/api/myClassService";

function Kelas() {
  const [activeTab, setActiveTab] = useState("Semua Kelas");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const tabs = ["Semua Kelas", "Sedang Berjalan", "Selesai"];

  const { data: rawCourses = [], isLoading, error } = useQuery({
    queryKey: ["my-classes"],
    queryFn: getAllMyClasses,
  });

  const courses = rawCourses.map((c) => ({ ...c, id: Number(c.id) }));

  const filteredCourses = courses.filter((c) => {
    const matchTab =
      activeTab === "Semua Kelas" || c.status === activeTab;
    const matchSearch = c.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchTab && matchSearch;
  });

  // Helper styling untuk label status transaksi
  const getStatusStyle = (status: string) => {
    return status === "Selesai"
      ? "bg-green-50 text-green-600 border border-green-200"
      : "bg-amber-50 text-amber-500 border border-amber-100";
  };

  return (
    <LayoutBeranda>
      <SectionContainer>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <KelasSidebar />

          <main className="flex-1 w-full space-y-5">
            <Card className="md:p-3 p-1 bg-white border border-gray-100 rounded-2xl shadow-sm space-y-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center xl:justify-between">
                <KelasFilterTabs
                  tabs={tabs}
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                />
                <KelasSearchBar
                  searchValue={searchQuery}
                  onSearchChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="space-y-4 pt-5">
                {isLoading ? (
                  <p className="text-center text-gray-400 py-10">
                    Memuat data...
                  </p>
                ) : error ? (
                  <p className="text-center text-red-500 py-10">{(error as Error)?.message || "Gagal memuat data"}</p>
                ) : filteredCourses.length === 0 ? (
                  <p className="text-center text-gray-400 py-10">
                    Belum ada kelas tersedia.
                  </p>
                ) : (
                  filteredCourses.map((course) => (
                    <CourseProgressCard
                      key={course.id}
                      course={course}
                      getStatusStyle={getStatusStyle}
                      onContinueLearning={(id) => navigate(`/course/`)}
                      onViewDetail={(id) => navigate(`/course/${id}`)}
                      onDownloadCertificate={(id) => navigate(`/sertifikat/${id}`)}
                    />
                  ))
                )}
              </div>

              <div className="pt-4 flex justify-end">
                <Pagination
                  currentPage={1}
                  totalPages={6}
                  onPageChange={() => {}}
                />
              </div>
            </Card>
          </main>
        </div>
      </SectionContainer>
    </LayoutBeranda>
  );
}

export default Kelas;
