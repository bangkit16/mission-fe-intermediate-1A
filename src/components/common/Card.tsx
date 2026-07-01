import { type ReactNode, type HTMLAttributes } from "react";

/* -------------------------------------------------------------------------- */
/*  Tipe data                                                                 */
/* -------------------------------------------------------------------------- */

type CardShadow = "none" | "sm" | "md" | "lg";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Tampilkan padding di dalam card (default: true) */
  padded?: boolean;
  /** Ukuran shadow (default: "none") */
  shadow?: CardShadow;
  /** Efek hover: translate naik + shadow (default: false) */
  hoverable?: boolean;
  /** Bisa di-click (tambah cursor-pointer) */
  clickable?: boolean;
  /** Image/thumbnail di atas card */
  image?: string;
  /** Alt text untuk image */
  imageAlt?: string;
  /** Header card (di atas body) */
  header?: ReactNode;
  /** Footer card (di bawah body) */
  footer?: ReactNode;
  /** Aspect ratio untuk image (contoh: "16/9", "4/3", "1") */
  imageRatio?: string;
  /** Class tambahan */
  className?: string;
}

/* -------------------------------------------------------------------------- */
/*  Mapping shadow                                                            */
/* -------------------------------------------------------------------------- */
const shadowMap: Record<CardShadow, string> = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
};

/* -------------------------------------------------------------------------- */
/*  Card — komponen container universal                                       */
/* -------------------------------------------------------------------------- */
function Card({
  children,
  padded = true,
  shadow = "none",
  hoverable = false,
  clickable = false,
  image,
  imageAlt = "",
  header,
  footer,
  imageRatio = "16/9",
  className = "",
  style,
  ...props
}: CardProps) {
  return (
    <div
      className={[
        "flex flex-col bg-white border border-[#e8e8e8] rounded-[14px] overflow-hidden",
        shadowMap[shadow],
        hoverable &&
          "hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300",
        clickable && "cursor-pointer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
      {...props}
    >
      {/* Image */}
      {image && (
        <div style={{ aspectRatio: imageRatio }} className="w-full overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Header */}
      {header && <div className="px-4 pt-4 pb-0">{header}</div>}

      {/* Body */}
      <div className={padded ? "p-4" : ""}>{children}</div>

      {/* Footer */}
      {footer && (
        <div className="px-4 pb-4 pt-0 mt-auto">{footer}</div>
      )}
    </div>
  );
}

export default Card;
