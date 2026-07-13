import React, { useState } from "react";
import {
  ChevronUp,
  ChevronDown,
  PlayCircle,
  FileText,
  CheckSquare,
} from "lucide-react";

// 1. Definisikan tipe data untuk item konten di dalam modul
interface ContentItem {
  id: string;
  type: "pre-test" | "video" | "rangkuman" | "quiz";
  title: string;
  subtitle: string;
  isActive?: boolean;
}

// 2. Definisikan tipe data untuk struktur modul utama
interface ModuleData {
  id: string;
  title: string;
  items: ContentItem[];
}

// 3. Mock data berdasarkan gambar yang diberikan
const sampleModules: ModuleData[] = [
  {
    id: "mod-1",
    title: "Introduction to HR",
    items: [
      {
        id: "c1",
        type: "pre-test",
        title: "Pre-Test: Introduction to HR",
        subtitle: "10 Pertanyaan",
        isActive: true,
      },
      {
        id: "c2",
        type: "video",
        title: "Video: Introduction to HR",
        subtitle: "12 Menit",
      },
      {
        id: "c3",
        type: "video",
        title: "Video: Introduction to HR",
        subtitle: "12 Menit",
      },
      {
        id: "c4",
        type: "video",
        title: "Video: Introduction to HR",
        subtitle: "12 Menit",
      },
      {
        id: "c5",
        type: "video",
        title: "Video: Introduction to HR",
        subtitle: "12 Menit",
      },
      {
        id: "c6",
        type: "rangkuman",
        title: "Rangkuman: Introduction to HR",
        subtitle: "12 Menit",
      },
      {
        id: "c7",
        type: "quiz",
        title: "Quiz: Introduction to HR",
        subtitle: "10 Pertanyaan",
      },
    ],
  },
  {
    id: "mod-2",
    title: "Introduction to HR",
    items: [],
  },
];

export default function ModuleAccordion() {
  // State untuk melacak modul mana saja yang sedang terbuka
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({
    "mod-1": true, // Modul pertama default terbuka
  });

  const toggleModule = (id: string) => {
    setOpenModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Fungsi helper untuk merender ikon yang sesuai berdasarkan tipe konten
  const renderIcon = (type: ContentItem["type"], isActive?: boolean) => {
    const iconColor = isActive ? "text-emerald-600" : "text-gray-500";

    switch (type) {
      case "pre-test":
      case "quiz":
        return <CheckSquare className={`w-6 h-6 ${iconColor}`} />;
      case "video":
        return <PlayCircle className={`w-6 h-6 ${iconColor}`} />;
      case "rangkuman":
        return <FileText className={`w-6 h-6 ${iconColor}`} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white min-h-screen font-sans">
      {sampleModules.map((module) => {
        const isOpen = openModules[module.id];

        return (
          <div key={module.id} className="mb-4">
            {/* Header Accordion */}
            <button
              onClick={() => toggleModule(module.id)}
              className="w-full flex justify-between items-center py-4 px-2 text-left focus:outline-none"
            >
              <span className="text-xl font-bold text-gray-800">
                {module.title}
              </span>
              {isOpen ? (
                <ChevronUp className="w-6 h-6 text-gray-600" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </button>

            {/* Konten Accordion */}
            {isOpen && module.items.length > 0 && (
              <div className="flex flex-col gap-3 mt-1 px-1">
                {module.items.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer ${
                      item.isActive
                        ? "border-emerald-500 bg-emerald-50/50"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    {/* Wadah Ikon */}
                    <div className="mt-0.5 flex-shrink-0">
                      {renderIcon(item.type, item.isActive)}
                    </div>

                    {/* Teks Deskripsi */}
                    <div className="flex flex-col">
                      <span
                        className={`font-semibold text-[15px] ${item.isActive ? "text-gray-900" : "text-gray-600"}`}
                      >
                        {item.title}
                      </span>
                      <span className="text-sm text-gray-400 mt-0.5">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
