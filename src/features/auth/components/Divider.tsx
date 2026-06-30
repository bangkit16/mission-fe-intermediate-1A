export interface DividerProps {
  /** Teks di tengah garis pemisah (default "atau") */
  text?: string;
  /** Class tambahan untuk wrapper */
  className?: string;
  /** Class untuk teks (mengganti `text-[#777] text-base`) */
  textClassName?: string;
}

function Divider({ text = "atau", className = "", textClassName }: DividerProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="flex-1 h-px bg-[#dddddd]"></span>
      <p className={textClassName ?? "text-[#777] text-base"}>{text}</p>
      <span className="flex-1 h-px bg-[#dddddd]"></span>
    </div>
  );
}

export default Divider;
