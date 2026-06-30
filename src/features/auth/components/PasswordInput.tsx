import { useState, type InputHTMLAttributes, useId } from "react";

export interface PasswordInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Label teks di atas input */
  label?: string;
  /** Pesan error */
  error?: string;
  /** Class tambahan untuk wrapper luar */
  containerClassName?: string;
  /** Class untuk label — menggantikan class default jika diisi */
  labelClassName?: string;
}

/* ── Gaya input (Mobile-first) ── */
const inputBase =
  "w-full h-12 md:h-14 border rounded px-4 pr-12 text-[15px] md:text-base outline-none transition-colors duration-200 bg-white placeholder:text-[#333]";
const inputNormal = "border-[#dcdcdc]";
const inputError = "border-red-500 focus:border-red-500";

/* ── Gaya label default (Mobile-first) ── */
const labelDefault =
  "block text-sm md:text-lg text-[#666] mb-2 md:mb-2.5";

function PasswordInput({
  label,
  error,
  required = false,
  disabled = false,
  className = "",
  containerClassName = "",
  labelClassName,
  id: externalId,
  ...props
}: PasswordInputProps) {
  const generatedId = useId();
  const inputId = externalId ?? generatedId;
  const [showPassword, setShowPassword] = useState(false);

  const inputClasses = [
    inputBase,
    error ? inputError : inputNormal,
    disabled ? "bg-gray-100 cursor-not-allowed opacity-60" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const labelClasses = labelClassName ?? labelDefault;

  return (
    <div className={containerClassName}>
      {label && (
        <label htmlFor={inputId} className={labelClasses}>
          {label}
          {required && <span className="text-[#ff5a2c]"> *</span>}
        </label>
      )}

      <div className="relative">
        <input
          id={inputId}
          type={showPassword ? "text" : "password"}
          className={inputClasses}
          disabled={disabled}
          required={required}
          {...props}
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9d9d9d] text-lg md:text-xl cursor-pointer leading-none"
          aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
        >
          {showPassword ? "🙈" : "👁"}
        </button>
      </div>

      {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default PasswordInput;
