import { type ReactNode } from "react";

export interface SectionHeadingProps {
  title: string;
  subtitle?: string | ReactNode;
  /** Class tambahan */
  className?: string;
}

function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${className}`}>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-2.5">
        {title}
      </h2>
      {subtitle && typeof subtitle === "string" ? (
        <p className="text-[#777] text-sm md:text-base mb-7">{subtitle}</p>
      ) : (
        subtitle
      )}
    </div>
  );
}

export default SectionHeading;
