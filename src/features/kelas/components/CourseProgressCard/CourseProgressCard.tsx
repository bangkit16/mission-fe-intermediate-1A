import React from 'react';
import { BookOpen, Clock } from 'lucide-react';

// ================================================
// Interface Props
// ================================================
export interface CourseData {
  id: number;
  completedModules: number;
  totalModules: number;
  status: string;
  title: string;
  description: string;
  image: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  duration: string;
  progress: number;
}

export interface CourseProgressCardProps {
  /** Data course yang akan ditampilkan */
  course: CourseData;
  /** Fungsi utility untuk mendapatkan style status */
  getStatusStyle: (status: string) => string;
  /** Handler saat tombol Unduh Sertifikat diklik */
  onDownloadCertificate?: (courseId: number) => void;
  /** Handler saat tombol Lihat Detail Kelas diklik */
  onViewDetail?: (courseId: number) => void;
  /** Handler saat tombol Lanjutkan Pembelajaran diklik */
  onContinueLearning?: (courseId: number) => void;
  /** Opsional: className tambahan */
  className?: string;
}

// ================================================
// Component
// ================================================
export const CourseProgressCard: React.FC<CourseProgressCardProps> = ({
  course,
  getStatusStyle,
  onDownloadCertificate,
  onViewDetail,
  onContinueLearning,
  className,
}) => {
  // --- Render ---
  return (
    <div className={`border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white flex flex-col ${className ?? ''}`}>
      {/* Header Bar: Status Modul Terselesaikan */}
      <div className="bg-green-50/50 px-4 py-3 border-b border-gray-100 flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs md:text-sm font-medium text-gray-700">
          {course.completedModules} / {course.totalModules} Modul Terselesaikan
        </span>
        <span
          className={`px-2.5 py-0.5 rounded-md text-xs font-semibold ${getStatusStyle(course.status)}`}
        >
          {course.status}
        </span>
      </div>

      {/* Konten Utama Informasi Kelas */}
      <div className="p-5 flex flex-col sm:flex-row gap-5 items-start">
        {/* Thumbnail Kelas */}
        <img
          src={course.image}
          alt={course.title}
          className="w-full sm:w-44 h-36 object-cover rounded-xl shrink-0"
        />

        {/* Detail Info Instruktur & Meta */}
        <div className="space-y-3 flex-1">
          <div>
            <h4 className="text-base md:text-lg font-bold text-gray-900 leading-snug">
              {course.title}
            </h4>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed mt-1">
              {course.description}
            </p>
          </div>

          {/* Profil Instruktur */}
          <div className="flex items-center gap-2.5">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="text-xs">
              <p className="font-bold text-gray-800">{course.instructor.name}</p>
              <p className="text-gray-400">{course.instructor.role}</p>
            </div>
          </div>

          {/* Metadata Modul & Waktu */}
          <div className="flex items-center gap-4 text-xs font-medium text-gray-500 pt-1">
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4 text-gray-400" />
              <span>{course.totalModules} Modul</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-gray-400" />
              <span>{course.duration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bar: Progress bar & Tombol Aksi */}
      <div className="px-5 py-4 bg-green-50/50 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Progress Pembelajaran Slider */}
        <div className="flex items-center gap-3 flex-1 max-w-md">
          <span className="text-xs md:text-sm font-medium text-gray-500 whitespace-nowrap">
            Progres Kelas:{' '}
            <span className="font-bold text-gray-800">{course.progress}%</span>
          </span>
          <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#FF5722] h-full rounded-full transition-all duration-300"
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>

        {/* Tombol Aksi Kondisional */}
        <div className="flex flex-col md:flex-row items-center gap-3 justify-end shrink-0">
          {course.status === 'Selesai' ? (
            <>
              <button
                type="button"
                onClick={() => onDownloadCertificate?.(course.id)}
                className="px-4 py-2 w-full md:w-auto border border-[#22C55E] hover:bg-green-50 text-[#22C55E] text-xs md:text-sm font-bold rounded-xl transition-colors"
              >
                Unduh Sertifikat
              </button>
              <button
                type="button"
                onClick={() => onViewDetail?.(course.id)}
                className="px-4 py-2 w-full md:w-auto bg-[#22C55E] hover:bg-green-600 text-white text-xs md:text-sm font-bold rounded-xl shadow-sm transition-colors"
              >
                Lihat Detail Kelas
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => onContinueLearning?.(course.id)}
              className="px-5 py-2 w-full md:w-auto bg-[#22C55E] hover:bg-green-600 text-white text-xs md:text-sm font-bold rounded-xl shadow-sm transition-colors"
            >
              Lanjutkan Pembelajaran
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

CourseProgressCard.displayName = 'CourseProgressCard';
