import { type ReactNode } from "react";

export interface SectionContainerProps {
  children: ReactNode;
  /** Class tambahan untuk <section> */
  className?: string;
}

function SectionContainer({ children, className = "" }: SectionContainerProps) {
  return (
    <section className={`py-3 md:py-10 ${className}`}>
      <div className="max-w-300 w-[95%] md:w-full mx-auto">{children}</div>
    </section>
  );
}

export default SectionContainer;
