import React from "react";
import { ArrowLeft } from "lucide-react";
import CertificateProgressPopover from "../../../src/components/course/CertificateProgressPopover";

// ================================================
// Interface Props
// ================================================
export interface CourseHeaderProps {
  title: string;
  isMobile: boolean;
  onBack?: () => void;
}

// ================================================
// Component
// ================================================
export const CourseHeader: React.FC<CourseHeaderProps> = ({
  title,
  isMobile,
  onBack,
}) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 md:px-28 px-5">
      <div className="mx-auto h-18 flex justify-between items-center">
        <div className="flex items-center gap-3 min-w-0">
          <button
            className="text-gray-600 hover:text-gray-900 text-xl font-medium"
            onClick={onBack}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <h1 className="font-semibold text-[15px] text-gray-800 truncate">
            {title}
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            {!isMobile && (
              <div className="w-28 h-2 rounded-full bg-orange-100 overflow-hidden">
                <div className="w-3/4 h-full bg-[#f59e0b] rounded-full" />
              </div>
            )}

            <CertificateProgressPopover />
          </div>

          <div className="hidden lg:block w-9 h-9 rounded-full overflow-hidden bg-purple-200">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <button className="lg:hidden text-xl text-gray-600">☰</button>
        </div>
      </div>
    </header>
  );
};

CourseHeader.displayName = "CourseHeader";
