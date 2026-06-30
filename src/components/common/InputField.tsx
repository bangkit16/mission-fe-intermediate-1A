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

/* ── Tailwind default untuk input ── */
const inputBase =
  "w-full h-14 max-md:h-12 max-[480px]:h-12 border rounded px-4 text-base max-md:text-[15px] outline-none transition-colors duration-200 bg-white placeholder:text-[#333]";

const inputNormal = "border-[#dcdcdc] focus:border-[#3ac943]";
const inputError = "border-red-500 focus:border-red-500";
const inputDisabled = "bg-gray-100 cursor-not-allowed opacity-60";

/* ── Tailwind default untuk label (gaya Register) ── */
const labelDefault =
  "block text-sm md:text-lg max-md:text-base text-[#666] mb-2.5 max-md:mb-2";

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
