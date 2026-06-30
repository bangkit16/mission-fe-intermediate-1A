import { type InputHTMLAttributes, useId } from "react";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Label teks di atas input */
  label?: string;
  /** Pesan error (menampilkan border merah + teks error) */
  error?: string;
  /** Teks bantuan di bawah input (sembunyi jika ada error) */
  helperText?: string;
  /** Class tambahan untuk wrapper <div> luar */
  containerClassName?: string;
  /** Class untuk label — jika diisi, menggantikan class label bawaan */
  labelClassName?: string;
}

/* ── Tailwind default untuk input (Mobile-first: default = mobile) ── */
const inputBase =
  "w-full h-12 md:h-14 border rounded px-4 text-[15px] md:text-base outline-none transition-colors duration-200 bg-white placeholder:text-[#333]";

const inputNormal = "border-[#dcdcdc] focus:border-[#3ac943]";
const inputError = "border-red-500 focus:border-red-500";
const inputDisabled = "bg-gray-100 cursor-not-allowed opacity-60";

/* ── Tailwind default untuk label (Mobile-first) ── */
const labelDefault =
  "block text-sm md:text-lg text-gray-600 mb-2 md:mb-2.5";

function InputField({
  label,
  error,
  helperText,
  required = false,
  disabled = false,
  className = "",
  containerClassName = "",
  labelClassName,
  id: externalId,
  ...props
}: InputFieldProps) {
  const generatedId = useId();
  const inputId = externalId ?? generatedId;

  /* gabung class input */
  const inputClasses = [
    inputBase,
    error ? inputError : inputNormal,
    disabled ? inputDisabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  /* label — jika labelClassName dikirim, ia replace default */
  const labelClasses = labelClassName ?? labelDefault;

  return (
    <div className={containerClassName}>
      {label && (
        <label htmlFor={inputId} className={labelClasses}>
          {label}
          {required && <span className="text-[#ff5a2c]"> *</span>}
        </label>
      )}

      <input
        id={inputId}
        className={inputClasses}
        disabled={disabled}
        required={required}
        {...props}
      />

      {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-[#777]">{helperText}</p>
      )}
    </div>
  );
}

export default InputField;
