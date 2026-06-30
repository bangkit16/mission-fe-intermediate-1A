import Button from "../../../components/common/Button";

export interface NewsletterSectionProps {
  /** URL background image */
  bgImage?: string;
  /** Label badge di atas title */
  badge?: string;
  /** Judul utama */
  title?: string;
  /** Teks deskripsi */
  description?: string;
  /** Placeholder input email */
  placeholder?: string;
  /** Teks tombol subscribe */
  buttonLabel?: string;
}

const defaultBg = "https://picsum.photos/1400/800?newsletter";

function NewsletterSection({
  bgImage = defaultBg,
  badge = "NEWSLETTER",
  title = "Mau Belajar Lebih Banyak?",
  description = "Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik.",
  placeholder = "Masukkan Emailmu",
  buttonLabel = "Subscribe",
}: NewsletterSectionProps) {
  return (
    <section className="py-12 md:py-14">
      <div className="max-w-300 w-[95%] md:w-full mx-auto">
        <div
          className="relative md:max-h-105 md:min-h-85 rounded-[18px] overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${bgImage}')` }}
        >
          <div className="absolute inset-0 bg-black/62"></div>

          <div className="relative z-2 max-w-190 mx-auto text-center text-white px-5 py-17">
            <span className="tracking-[2px] text-[13px]">{badge}</span>
            <h2 className="text-3xl md:text-[34px] lg:text-4xl xl:text-[46px] font-bold mt-2.5 mb-3.5">
              {title}
            </h2>
            <p className="text-[#e7e7e7] mb-7">{description}</p>

            <form className="flex flex-col gap-3.5 justify-center md:flex-row">
              <input
                type="email"
                placeholder={placeholder}
                className="w-full md:w-105 text-slate-900 bg-white px-4 py-4 rounded-[10px] text-[15px] border-none outline-none"
              />
              <Button
                type="submit"
                variant="subscribe"
                className="w-full md:w-auto"
              >
                {buttonLabel}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
