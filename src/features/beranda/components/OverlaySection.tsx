import { type ReactNode } from "react";

export interface OverlaySectionProps {
  /** URL background image */
  bgImage: string;
  /** Opacity overlay (contoh: 58 → bg-black/58) */
  overlayOpacity?: number;
  /** Konten yang ditampilkan di tengah */
  children: ReactNode;
  /** Class tambahan untuk outer section */
  className?: string;
  /** Class untuk container dalam (max-width wrapper) */
  containerClassName?: string;
  /** Class untuk wrapper konten putih */
  contentClassName?: string;
}

function OverlaySection({
  bgImage,
  overlayOpacity = 58,
  children,
  className = "",
  containerClassName = "",
  contentClassName = "",
}: OverlaySectionProps) {
  return (
    <section className={`py-12 md:py-14 ${className}`}>
      <div className={`max-w-300 w-[90%] mx-auto ${containerClassName}`}>
        <div
          className="relative min-h-105 md:min-h-95 rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${bgImage}')` }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity / 100})` }}
          ></div>

          <div
            className={`relative z-[2] max-w-[850px] mx-auto text-center text-white px-5 md:px-8 py-[50px] md:py-[70px] ${contentClassName}`}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OverlaySection;
