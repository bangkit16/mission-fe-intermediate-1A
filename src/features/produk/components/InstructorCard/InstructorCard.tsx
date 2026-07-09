import React from "react";
import Card from "../../../../components/common/Card";

// ================================================
// Interface Props
// ================================================
export interface InstructorCardProps {
  /** Nama instruktur */
  name: string;
  /** Role/posisi instruktur */
  role: string;
  /** Nama perusahaan instruktur */
  company: string;
  /** URL avatar instruktur */
  avatar: string;
  /** Deskripsi singkat instruktur */
  description: string;
}

// ================================================
// Component
// ================================================
export const InstructorCard: React.FC<InstructorCardProps> = ({
  name,
  role,
  company,
  avatar,
  description,
}) => {
  return (
    <Card className="mb-5">
      <div className="flex items-center gap-2 mt-1 md:gap-2.5 m">
        <img
          src={avatar}
          alt={name}
          className="w-7 h-7 rounded-xl md:w-10 md:h-10"
        />
        <div className="min-w-0">
          <h4 className="text-[13px] font-semibold leading-tight truncate md:text-base">
            {name}
          </h4>
          <span className="text-[11px] text-gray-400 line-clamp-1 md:text-sm">
            {role}{" "}
            <span className="hidden md:inline ">
              {" di "}
              <span className="font-semibold text-gray-600 ">{company} </span>
            </span>
          </span>
        </div>
      </div>
      <p className="text-sm md:text-base font-normal text-gray-900 mt-4">
        {description}
      </p>
    </Card>
  );
};

InstructorCard.displayName = "InstructorCard";
