import React, { useState } from "react";
import Pagination from "../components/common/Pagination";
import SectionContainer from "../components/common/SectionContainer";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import Card from "../components/common/Card";
import { KelasSidebar } from "../../features/kelas/components/KelasSidebar";
import { KelasFilterTabs } from "../../features/kelas/components/KelasFilterTabs";
import { KelasSearchBar } from "../../features/kelas/components/KelasSearchBar";
import {
  CourseProgressCard,
  type CourseData,
} from "../../features/kelas/components/CourseProgressCard";

const courseProgressData: CourseData[] = [
  {
    id: 1,
    completedModules: 12,
    totalModules: 12,
    status: "Selesai",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    image: "https://picsum.photos/150/100?coffee",
    instructor: {
      name: "Jenna Ortega",
      role: "Senior Accountant di Gojek",
      avatar: "https://i.pravatar.cc/100?img=33",
    },
    duration: "360 Menit",
    progress: 100,
  },
  {
    id: 2,
    completedModules: 2,
    totalModules: 12,
    status: "Sedang Berjalan",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    image: "https://picsum.photos/150/100?coffee",
    instructor: {
      name: "Jenna Ortega",
      role: "Senior Accountant di Gojek",
      avatar: "https://i.pravatar.cc/100?img=33",
    },
    duration: "360 Menit",
    progress: 28,
  },
  {
    id: 3,
    completedModules: 2,
    totalModules: 12,
    status: "Sedang Berjalan",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    image: "https://picsum.photos/150/100?coffee",
    instructor: {
      name: "Jenna Ortega",
      role: "Senior Accountant di Gojek",
      avatar: "https://i.pravatar.cc/100?img=33",
    },
    duration: "360 Menit",
    progress: 28,
  },
];

function Kelas() {
  const [activeTab, setActiveTab] = useState("Semua Kelas");
  const tabs = ["Semua Kelas", "Sedang Berjalan", "Selesai"];

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
                <KelasSearchBar />
              </div>

              <div className="space-y-4 pt-5">
                {courseProgressData.map((course) => (
                  <CourseProgressCard
                    key={course.id}
                    course={course}
                    getStatusStyle={getStatusStyle}
                  />
                ))}
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
