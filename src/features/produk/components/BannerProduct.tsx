export interface OverlaySectionProps {
  bgImage: string;
  rating?: number;
  reviewCount?: number;
  title?: string;
  description?: string;
}

function BannerProduct({
  bgImage,
  rating = 4.5,
  reviewCount = 200,
  title,
  description,
}: OverlaySectionProps) {
  return (
    <section className={`py-8 md:py-10 `}>
      <div className={`max-w-300 w-[95%] md:w-full mx-auto `}>
        <div
          className="relative min-h-105 md:min-h-95 rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-start"
          style={{ backgroundImage: `url('${bgImage}')` }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `rgba(0,0,0,${70 / 100})` }}
          />

          <div
            className={`relative z-2 max-w-212 text-start text-white px-5 md:px-24 py-12 md:py-17`}
          >
            <h1 className="text-2xl md:text-4xl  leading-tight font-semibold mb-5">
              {title}
            </h1>
            <p className="text-sm md:text-base text-white mb-5 max-w-120">
              {description}
            </p>
            <div className="text-[13px] md:text-sm">
              {"⭐".repeat(Math.floor(rating))}
              <span className="text-gray-300 ml-1">
                {rating} ({reviewCount})
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerProduct;
