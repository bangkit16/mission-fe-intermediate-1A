export interface CourseCardProps {
  /** URL gambar thumbnail kursus */
  image: string;
  /** Judul kursus */
  title: string;
  /** Deskripsi singkat */
  description: string;
  /** Data instruktur */
  instructor: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  };
  /** Rating (bintang) */
  rating: number;
  /** Jumlah ulasan */
  reviewCount: number;
  /** Harga dalam format Rupiah (misal: "Rp 300K") */
  price: string;
}

function CourseCard({
  image,
  title,
  description,
  instructor,
  rating,
  reviewCount,
  price,
}: CourseCardProps) {
  return (
    /* Root Div Utama: Secara default (mobile) berbentuk baris/menyamping, di desktop berbentuk kolom ke bawah */
    <div
      className="flex flex-col gap-3 p-3 
    bg-white border border-[#e8e8e8] rounded-[14px] overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 md:gap-0 md:p-0 h-full"
    >
      <div className="flex md:flex-col gap-3 md:gap-0 h-full justify-between">
        {/* Container Gambar */}
        <div className="md:p-3.5 md:pb-0">
          <img
            src={image}
            alt={title}
            className="w-22 min-w-22 h-22 rounded-xl object-cover md:w-full md:h-45 md:rounded-[10px]"
          />
        </div>

        {/* Container Konten Utama */}
        <div className="flex justify-between w-full h-full md:p-4 ">
          {/* Bagian Atas: Judul, Deskripsi, dan Instruktur */}
          <div className="flex flex-col justify-around md:justify-between h-full mb-2 md:mb-4">
            <h3 className="text-base font-bold leading-[1.3] mb-1.5 md:text-xl md:leading-tight md:mb-2 line-clamp-2">
              {title}
            </h3>
            <p className="hidden md:line-clamp-2 text-sm text-[#666] mb-4">
              {description}
            </p>
            <div className="flex items-center gap-2 mt-1 md:gap-2.5 m">
              <img
                src={instructor.avatar}
                alt={instructor.name}
                className="w-7 h-7 rounded-xl md:w-[42px] md:h-[42px]"
              />
              <div className="min-w-0">
                <h4 className="text-[13px] font-semibold leading-tight truncate md:text-base">
                  {instructor.name}
                </h4>
                <span className="text-[11px] text-gray-400 line-clamp-1 md:text-sm">
                  {instructor.role}{" "}
                  <span className="hidden md:inline ">
                    {" di "}
                    <span className="font-semibold text-gray-600 ">
                      {instructor.company}{" "}
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bagian Bawah: Rating dan Harga */}
      <div className="flex justify-between items-center gap-1  pt-2 md:px-3 md:my-3 md:border-none">
        <div className="text-[13px] md:text-sm">
          {"⭐".repeat(Math.floor(rating))}
          <span className="text-[#666] ml-1">
            {rating} ({reviewCount})
          </span>
        </div>
        <div className="text-lg font-extrabold text-[#2ecc71] md:text-3xl">
          {price}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
