export interface AuthHeadingProps {
  title: string;
  subtitle?: string;
  /** Class tambahan untuk wrapper */
  className?: string;
}

function AuthHeading({ title, subtitle, className = "" }: AuthHeadingProps) {
  return (
    <div className={`text-center mb-9 ${className}`}>
      <h2 className="text-[28px] md:text-3xl lg:text-4xl font-bold mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[15px] md:text-base text-[#7b7b7b]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default AuthHeading;
