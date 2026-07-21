import useIsMobile from "../../../hooks/useIsMobile";

interface CongratsScreenProps {
  onContinue: () => void;
}

function CongratsScreen({ onContinue }: CongratsScreenProps) {
  const isMobile = useIsMobile();
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
          isMobile ? "max-h-[30vh] overflow-auto" : "max-h-[40vh] overflow-hidden"
        }`}
      >
        <img src="congrats.png" className="w-full" alt="" />
      </section>

      {/* DESCRIPTION */}
      <section
        className={`bg-white py-8 md:px-10 ${
          isMobile ? "overflow-y-auto" : " overflow-y-auto "
        }`}
      >
        <div className="md:px-18 px-5 mx-auto">
          {/* ================= AREA HASIL PRETEST (BERDASARKAN GAMBAR) ================= */}
          <div className="mb-8">
            {/* Tanggal Pretest */}
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Tanggal Pretest:
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              23 September 2022, 10:20 AM
            </p>

            {/* Tabel Grid Nilai */}
            <div className="grid grid-cols-4 border border-gray-200 rounded-lg overflow-hidden mb-8 text-center">
              {/* Kolom Nilai */}
              <div className="bg-[#2dd4bf] text-white p-4 flex flex-col justify-center items-center">
                <span className="text-xs font-semibold opacity-90 mb-1">
                  Nilai
                </span>
                <span className="text-2xl font-bold">100</span>
              </div>

              {/* Kolom Soal */}
              <div className="bg-white p-4 border-r border-gray-200 flex flex-col justify-center items-center">
                <span className="text-xs font-semibold text-gray-400 mb-1">
                  Soal
                </span>
                <span className="text-2xl font-bold text-gray-800">10</span>
              </div>

              {/* Kolom Benar */}
              <div className="bg-white p-4 border-r border-gray-200 flex flex-col justify-center items-center">
                <span className="text-xs font-semibold text-gray-400 mb-1">
                  Benar
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span className="text-2xl font-bold text-gray-800">10</span>
                </div>
              </div>

              {/* Kolom Salah */}
              <div className="bg-white p-4 flex flex-col justify-center items-center">
                <span className="text-xs font-semibold text-gray-400 mb-1">
                  Salah
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-red-500 text-lg">✕</span>
                  <span className="text-2xl font-bold text-gray-800">0</span>
                </div>
              </div>
            </div>

            {/* Teks Selesai */}
            <h2 className="text-xl font-bold text-gray-900 mb-2">Selesai!</h2>
            <p className="text-gray-500 text-sm mb-1">
              Pretest sudah selesai dan kami sudah mengetahui progresmu.
            </p>
            <p className="text-gray-500 text-sm mb-6">Saatnya memulai kelas!</p>

            <button
              onClick={onContinue}
              className="inline-flex items-center gap-2 bg-[#22c55e] rounded-xl text-white px-5 py-2.5 text-sm font-bold hover:bg-green-600 transition-colors"
            >
              Lanjutkan
            </button>
          </div>
          {/* ========================================================================= */}

        </div>
      </section>
    </div>
  );
}

export default CongratsScreen;
