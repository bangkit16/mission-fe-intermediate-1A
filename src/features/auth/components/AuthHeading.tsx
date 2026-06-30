export interface AuthHeadingProps {
  title: string;
  subtitle?: string;
  /** Class tambahan untuk wrapper */
  className?: string;
}

function AuthHeading({ title, subtitle, className = "" }: AuthHeadingProps) {
  return (
    <div className={`text-center mb-9 ${className}`}>
      <h2 className="text-4xl max-md:text-3xl max-[480px]:text-[28px] font-bold mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#7b7b7b] text-base max-md:text-[15px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default AuthHeading;
