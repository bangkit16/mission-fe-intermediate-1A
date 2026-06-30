import { type ReactNode } from "react";

export interface AuthCardProps {
  children: ReactNode;
  /** Lebar card, default "max-w-[600px]" untuk Login */
  maxWidth?: string;
}

function AuthCard({ children, maxWidth = "max-w-[600px]" }: AuthCardProps) {
  return (
    <div
      className={`w-full ${maxWidth} mx-4 bg-white border border-[#e5e5e5] rounded p-5 my-7 md:p-7 md:my-16`}
    >
      {children}
    </div>
  );
}

export default AuthCard;
