import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useSelector } from "react-redux";
import CertificateProgressPopover from "../../../components/course/CertificateProgressPopover";
import NavigationMenu from "../../../components/common/NavigationMenu";
import { selectIsAuthenticated, selectUser } from "../../../store/authSlice";

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
  const [profileOpen, setProfileOpen] = useState(false);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 md:px-28 px-5">
      <div className="mx-auto h-18 flex justify-between items-center">
        <div className="flex items-center gap-3 min-w-0">
          <button
            className="text-gray-600 hover:text-gray-900 text-xl font-medium"
            onClick={() => window.location.href = "/kelas"}
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
              <>
                <div className="w-28 h-2 rounded-full bg-orange-100 overflow-hidden">
                  <div className="w-3/4 h-full bg-[#f59e0b] rounded-full" />
                </div>
                <CertificateProgressPopover />
              </>
            )}
          </div>

          {isAuthenticated ? (
            <div className="relative hidden lg:block">
              <button onClick={() => setProfileOpen((prev) => !prev)}>
                <img
                  src={user?.profileImage || "https://i.pravatar.cc/40"}
                  alt="Profile"
                  className="w-9 h-9 rounded-full cursor-pointer object-cover"
                />
              </button>
              <NavigationMenu
                open={profileOpen}
                onClose={() => setProfileOpen(false)}
                variant="desktop"
              />
            </div>
          ) : (
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/login"
                className="px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition no-underline"
              >
                Masuk
              </a>
              <a
                href="/register"
                className="px-4 py-2 text-sm font-semibold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition no-underline"
              >
                Daftar
              </a>
            </div>
          )}

          <button className="lg:hidden text-xl text-gray-600">☰</button>
        </div>
      </div>
    </header>
  );
};

CourseHeader.displayName = "CourseHeader";
