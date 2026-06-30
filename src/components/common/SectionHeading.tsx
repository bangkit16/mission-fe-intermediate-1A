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
      <h2 className="text-4xl max-md:text-3xl max-[480px]:text-[28px] font-extrabold mb-2.5">
        {title}
      </h2>
      {subtitle && typeof subtitle === "string" ? (
        <p className="text-[#777] mb-7">{subtitle}</p>
      ) : (
        subtitle
      )}
    </div>
  );
}

export default SectionHeading;
