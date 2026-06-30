import { type ReactNode } from "react";

export interface SectionContainerProps {
  children: ReactNode;
  /** Class tambahan untuk <section> */
  className?: string;
}

function SectionContainer({ children, className = "" }: SectionContainerProps) {
  return (
    <section className={`py-12 md:py-14 ${className}`}>
      <div className="max-w-[1200px] w-[90%] mx-auto">{children}</div>
    </section>
  );
}

export default SectionContainer;
