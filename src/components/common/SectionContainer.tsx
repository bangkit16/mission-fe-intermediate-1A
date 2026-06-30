import { type ReactNode } from "react";

export interface SectionContainerProps {
  children: ReactNode;
  /** Class tambahan untuk <section> */
  className?: string;
}

function SectionContainer({ children, className = "" }: SectionContainerProps) {
  return (
    <section className={`py-12 md:py-14 ${className}`}>
      <div className="max-w-300 w-[95%] md:w-full mx-auto">{children}</div>
    </section>
  );
}

export default SectionContainer;
