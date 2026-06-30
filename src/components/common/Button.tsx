import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { Link } from "react-router";

type ButtonVariant = "primary" | "secondary" | "google" | "subscribe" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "xl" | "full";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  to?: string;
  href?: string;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#3ac943] text-white font-medium border-none hover:bg-[#34b83d]",
  secondary:
    "bg-[#d9ecd0] text-[#3ac943] font-medium border-none hover:bg-[#c8e0be]",
  google:
    "border border-[#dddddd] bg-white text-[#555] font-medium hover:bg-gray-50",
  subscribe:
    "bg-[#f3b02e] text-white font-bold border-none hover:bg-[#e0a129]",
  ghost:
    "bg-transparent border-none cursor-pointer hover:opacity-80",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-md",
  md: "px-6 py-3 text-base rounded-[10px]",
  lg: "px-8 py-3.5 text-lg rounded-[10px]",
  xl: "px-10 py-4 text-lg rounded-[10px]",
  full: "w-full h-12 sm:h-[52px] md:h-14 text-[17px] md:text-lg rounded-[10px]",
};

function Button({
  variant = "primary",
  size,
  children,
  to,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center no-underline cursor-pointer transition-colors duration-300";
  const vClass = variantClasses[variant];
  const sClass = sizeClasses[size ?? (variant === "subscribe" ? "md" : variant === "ghost" ? "md" : "full")];
  const allClass = `${base} ${vClass} ${sClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={allClass}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={allClass}>
        {children}
      </a>
    );
  }

  return (
    <button className={allClass} {...props}>
      {children}
    </button>
  );
}

export default Button;
