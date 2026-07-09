// import React, { useState } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Menu,
//   FileText,
//   PlayCircle,
//   BookOpen,
//   // HelpCircle,
//   Star,
//   ChevronDown,
//   CheckCircle2,
// } from "lucide-react";

// // --- Types & Interfaces ---
// interface ModuleItem {
//   id: string;
//   type: "pre-test" | "video" | "summary" | "quiz";
//   title: string;
//   durationOrQuestions: string;
//   isCompleted?: boolean;
// }

// interface ModuleSection {
//   id: string;
//   title: string;
//   items: ModuleItem[];
// }

// // --- Dummy Data ---
// const modulesData: ModuleSection[] = [
//   {
//     id: "m1",
//     title: "Introduction to HR",
//     items: [
//       {
//         id: "item-1",
//         type: "video",
//         title: "Video: Introduction to HR",
//         durationOrQuestions: "12 Menit",
//         isCompleted: true,
//       },
//       {
//         id: "item-2",
//         type: "video",
//         title: "Video: Introduction to HR",
//         durationOrQuestions: "12 Menit",
//         isCompleted: true,
//       },
//       {
//         id: "item-3",
//         type: "video",
//         title: "Video: Introduction to HR",
//         durationOrQuestions: "12 Menit",
//         isCompleted: true,
//       },
//       {
//         id: "item-4",
//         type: "video",
//         title: "Video: Introduction to HR",
//         durationOrQuestions: "12 Menit",
//         isCompleted: true,
//       },
//       {
//         id: "item-5",
//         type: "video",
//         title: "Video: Introduction to HR",
//         durationOrQuestions: "12 Menit",
//         isCompleted: true,
//       },
//       {
//         id: "item-6",
//         type: "summary",
//         title: "Rangkuman: Introduction to HR",
//         durationOrQuestions: "12 Menit",
//         isCompleted: true,
//       },
//       {
//         id: "item-7",
//         type: "quiz",
//         title: "Quiz: Introduction to HR",
//         durationOrQuestions: "10 Pertanyaan",
//       },
//     ],
//   },
//   { id: "m2", title: "Introduction to HR", items: [] },
//   { id: "m3", title: "Introduction to HR", items: [] },
// ];

// export default function CoursePage() {
//   const [activeModuleId, setActiveModuleId] = useState<string>("m1");
//   const [activeItemId, setActiveItemId] = useState<string>("item-7");

//   const renderModuleIcon = (
//     type: ModuleItem["type"],
//     isCompleted?: boolean,
//   ) => {
//     if (isCompleted) {
//       return (
//         <CheckCircle2 className="w-5 h-5 text-green-500 fill-green-50 flex-shrink-0" />
//       );
//     }
//     switch (type) {
//       case "pre-test":
//         return <FileText className="w-5 h-5 text-gray-500 flex-shrink-0" />;
//       case "video":
//         return <PlayCircle className="w-5 h-5 text-gray-500 flex-shrink-0" />;
//       case "summary":
//         return <BookOpen className="w-5 h-5 text-gray-500 flex-shrink-0" />;
//       case "quiz":
//         return <FileText className="w-5 h-5 text-gray-500 flex-shrink-0" />;
//     }
//   };

//   // Komponen Reusable untuk Daftar Modul agar tidak duplikasi kode antara desktop & mobile
//   const ModuleListGroup = () => (
//     <div className="space-y-3">
//       {modulesData.map((section) => {
//         const isOpen = activeModuleId === section.id;
//         return (
//           <div
//             key={section.id}
//             className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
//           >
//             <button
//               onClick={() => setActiveModuleId(isOpen ? "" : section.id)}
//               className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors text-left"
//             >
//               <span className="font-bold text-sm sm:text-base text-gray-900">
//                 {section.title}
//               </span>
//               <ChevronDown
//                 className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
//               />
//             </button>

//             {isOpen && section.items && section.items.length > 0 && (
//               <div className="border-t border-gray-100 bg-white p-3 space-y-2">
//                 {section.items.map((item) => {
//                   const isActive = activeItemId === item.id;
//                   return (
//                     <button
//                       key={item.id}
//                       onClick={() => setActiveItemId(item.id)}
//                       className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all ${
//                         isActive
//                           ? "bg-green-50 border border-green-500"
//                           : "hover:bg-gray-50 border border-transparent"
//                       }`}
//                     >
//                       {renderModuleIcon(item.type, item.isCompleted)}
//                       <div className="flex-1 min-w-0">
//                         <p
//                           className={`text-xs sm:text-sm font-semibold leading-tight mb-1 ${isActive ? "text-gray-900" : "text-gray-700"}`}
//                         >
//                           {item.title}
//                         </p>
//                         <span className="text-xs text-gray-400 block">
//                           {item.durationOrQuestions}
//                         </span>
//                       </div>
//                     </button>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-white flex flex-col font-sans antialiased text-gray-800 pb-12 lg:pb-0">
//       {/* --- 1. NAVBAR / HEADER --- */}
//       <header className="bg-white border-b border-gray-100 sticky top-0 z-50 px-4 py-3.5 lg:px-6 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
//             <ChevronLeft className="w-5 h-5 text-gray-600" />
//           </button>
//           <h1 className="text-sm lg:text-base font-medium text-gray-700 truncate max-w-[180px] sm:max-w-xs">
//             Foundations...
//           </h1>
//         </div>

//         <div className="flex items-center gap-3">
//           <div className="flex items-center gap-1.5">
//             <div className="w-16 bg-amber-100 h-2 rounded-full overflow-hidden hidden sm:block">
//               <div className="bg-amber-400 h-full w-[83%]" />
//             </div>
//             <span className="text-xs sm:text-sm font-semibold text-green-500 flex items-center gap-0.5">
//               10/12 <ChevronDown className="w-4 h-4" />
//             </span>
//           </div>

//           <img
//             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
//             alt="User Avatar"
//             className="w-7 h-7 rounded-full object-cover hidden lg:block"
//           />

//           <button className="p-1 text-gray-700 hover:bg-gray-100 rounded">
//             <Menu className="w-6 h-6" />
//           </button>
//         </div>
//       </header>

//       {/* --- MAIN LAYOUT --- */}
//       <div className="flex-1 flex flex-col lg:flex-row">
//         {/* --- KIRI: AREA KONTEN UTAMA --- */}
//         <div className="flex-1 flex flex-col min-w-0">
//           {/* Hero Banner Canvas */}
//           <div className="relative w-full h-44 sm:h-64 bg-blue-50 overflow-hidden flex items-center justify-center">
//             <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 opacity-90" />
//             <div className="absolute bottom-0 w-full h-1/4 bg-teal-600" />
//             <h2 className="relative z-10 text-5xl sm:text-7xl font-black text-white tracking-wider drop-shadow-md">
//               RULES
//             </h2>
//           </div>

//           {/* Aturan Deskripsi */}
//           <div className="p-5 sm:p-8 max-w-3xl">
//             <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3.5">
//               Aturan
//             </h2>

//             <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
//               Kerjakan pretest dengan sebaik mungkin untuk mengukur pemahaman
//               awalmu terkait materi yang akan kamu pelajari
//             </p>

//             <div className="space-y-1 text-xs sm:text-sm text-gray-500 mb-5">
//               <p>
//                 Syarat Nilai Kelulusan:{" "}
//                 <span className="font-medium text-gray-700">-</span>
//               </p>
//               <p>
//                 Durasi Ujian:{" "}
//                 <span className="font-medium text-gray-700">5 Menit</span>
//               </p>
//             </div>

//             <p className="text-xs sm:text-sm text-gray-400 leading-normal mb-6">
//               Jangan khawatir, total skor tidak akan mempengaruhi kelulusan dan
//               penilaian akhirmu dalam rangkaian kelas ini
//             </p>

//             <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors shadow-sm">
//               Mulai Quiz
//             </button>
//           </div>

//           {/* --- 2. GREEN NAVIGATION BAR --- */}
//           {/* Di mobile menjadi pemisah konten atas dan Daftar Modul, di desktop tetap di bawah */}
//           <div className="bg-green-500 text-white px-4 py-3 flex items-center justify-between select-none my-2 lg:my-0 lg:mt-auto">
//             <button className="flex items-center gap-1 font-medium text-xs sm:text-sm opacity-90 hover:opacity-100 transition-opacity max-w-[45%] truncate">
//               <ChevronLeft className="w-4 h-4 flex-shrink-0" />
//               <span className="truncate">Foundations...</span>
//             </button>
//             <button className="flex items-center gap-1 font-medium text-xs sm:text-sm opacity-90 hover:opacity-100 transition-opacity max-w-[45%] truncate">
//               <span className="truncate">Foundations...</span>
//               <ChevronRight className="w-4 h-4 flex-shrink-0" />
//             </button>
//           </div>

//           {/* --- 3. DAFTAR MODUL (KHUSUS VIEWPORT MOBILE) --- */}
//           <div className="p-4 bg-white block lg:hidden">
//             <h3 className="font-bold text-gray-900 text-base mb-4">
//               Daftar Modul
//             </h3>
//             <ModuleListGroup />
//           </div>
//         </div>

//         {/* --- KANAN: ASIDE SIDEBAR (KHUSUS VIEWPORT DESKTOP) --- */}
//         <aside className="hidden lg:flex w-[360px] border-l border-gray-200 flex-col bg-white sticky top-[57px] h-[calc(100vh-57px)]">
//           <div className="p-4 border-b border-gray-100 bg-gray-50/50">
//             <h3 className="font-bold text-gray-900 text-sm sm:text-base">
//               Daftar Modul
//             </h3>
//           </div>
//           <div className="flex-1 overflow-y-auto p-4">
//             <ModuleListGroup />
//           </div>
//           {/* Rating button di bawah sidebar desktop */}
//           <div className="p-3.5 bg-amber-400 hover:bg-amber-500 transition-colors cursor-pointer flex items-center justify-center gap-2 font-bold text-sm text-white">
//             <Star className="w-4 h-4 fill-current text-white" />
//             <span>Beri Review & Rating</span>
//           </div>
//         </aside>
//       </div>

//       {/* --- 4. YELLOW STICKY BUTTON (KHUSUS VIEWPORT MOBILE) --- */}
//       <div className="fixed bottom-0 left-0 right-0 z-40 block lg:hidden">
//         <div className="bg-amber-400 hover:bg-amber-500 transition-colors cursor-pointer flex items-center justify-center gap-2 py-3.5 font-bold text-sm text-white shadow-md">
//           <Star className="w-4 h-4 fill-current text-white" />
//           <span>Beri Review & Rating</span>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import LayoutCourse from "../components/layout/LayoutCourse";

function CoursePage() {
  return (
    <LayoutCourse>
      <div>CoursePage</div>
    </LayoutCourse>
  );
}

export default CoursePage;
