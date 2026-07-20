import useIsMobile from "../../../hooks/useIsMobile";

function VideoRangkumanScreen() {
  const isMobile = useIsMobile();

  const title = "Praktikkan Skill dengan Technical Book";
  const description =
    "Pelajari dan praktikkan skill teknis dalam berbagai industri dengan Technical Book Riselearn";

  const instructor = {
    name: "Rizki Agung",
    role: "Senior UI/UX Designer",
    company: "Tech Corp",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
    rating: 4.8,
    reviewCount: 342,
  };

  return (
    <div
      className={` w-full h-full ${
        isMobile ? "flex flex-col" : "flex-1 flex flex-col overflow-hidden"
      }
            `}
    >
      {/* VIDEO */}
      <section
        className={`bg-[#1a1a1a] flex items-center justify-center   relative  ${
          isMobile ? "max-h-[30vh] overflow-auto" : "max-h-[58vh]"
        }`}
      >
        {/* <img src="try-again.png" className="w-full" alt="" /> */}
        <div className=" w-250 h-120 flex items-center justify-center md:px-28 bg-gray-700">
          <div className="w-18 h-18 rounded-full bg-white flex items-center justify-center text-xl shadow-lg cursor-pointer pl-1 text-gray-800 hover:scale-105 transition-transform">
            ▶
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section
        className={`bg-white py-8 md:px-10 ${
          isMobile ? "overflow-y-auto" : " overflow-y-auto "
        }`}
      >
        <div className="md:px-18 px-5 mx-auto">
          {/* Bagian Atas: Judul, Deskripsi, dan Instruktur */}
          <div className="flex flex-col justify-around md:justify-between h-full mb-1 ">
            <h3 className="text-lg font-bold  mb-1.5 md:text-xl md:mb-2 line-clamp-2">
              {title}
            </h3>
            <p className="md:line-clamp-2 text-sm  text-gray-500 mb-4">
              {description}
            </p>
            <div className="flex items-center gap-2 mt-1 md:gap-2.5 m">
              <img
                src={instructor.avatar}
                alt={instructor.name}
                className="w-7 h-7 rounded-xl md:w-10 md:h-10"
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
                {/* Rating */}
              </div>
            </div>
            <div className="flex justify-between items-center gap-1 md:px-3 md:my-3 md:border-none">
              <div className="text-xs md:text-sm">
                {"⭐".repeat(Math.floor(instructor.rating))}
                <span className="text-[#666] ml-1">
                  {instructor.rating} ({instructor.reviewCount})
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VideoRangkumanScreen;
