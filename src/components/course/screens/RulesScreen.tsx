import useIsMobile from "../../../hooks/useIsMobile";

interface RulesScreenProps {
  onStart: () => void;
  durationMinutes?: number;
  totalQuestions?: number;
  passingScore?: number;
  title?: string;
}

function RulesScreen({
  onStart,
  durationMinutes,
  totalQuestions,
  passingScore,
  title,
}: RulesScreenProps) {
  const isMobile = useIsMobile();
  return (
    <div
      className={`w-full h-full ${
        isMobile ? "flex flex-col" : "flex-1 flex flex-col overflow-hidden"
      }`}
    >
      <section
        className={`bg-[#1a1a1a] flex items-center justify-center relative ${
          isMobile
            ? "max-h-[30vh] overflow-auto"
            : "max-h-[40vh] overflow-hidden"
        }`}
      >
        <img src="/rules.png" className="w-full" alt="" />
      </section>

      <section
        className={`bg-white py-8 md:px-10 ${
          isMobile ? "overflow-y-auto" : "overflow-y-auto"
        }`}
      >
        <div className="md:px-18 px-5 mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Aturan</h2>

          <p className="text-gray-500 text-sm mb-6">
            Kerjakan {title ?? "pretest"} dengan sebaik mungkin untuk mengukur
            pemahaman awalmu terkait materi yang akan kamu pelajari
          </p>

          <div className="text-gray-500 text-sm mb-6 space-y-1">
            {totalQuestions != null && (
              <p>Jumlah Soal: {totalQuestions}</p>
            )}
            {durationMinutes != null && (
              <p>Durasi Ujian: {durationMinutes} Menit</p>
            )}
            {passingScore != null && (
              <p>Syarat Nilai Kelulusan: {passingScore}</p>
            )}
          </div>

          <p className="text-gray-500 text-sm mb-6">
            Jangan khawatir, total skor tidak akan memengaruhi kelulusan dan
            penilaian akhirmu dalam rangkaian kelas ini
          </p>

          <button
            onClick={onStart}
            className="inline-flex items-center gap-2 border border-[#22c55e] rounded-xl bg-white px-5 py-2.5 text-[#22c55e] text-sm font-bold hover:bg-green-50 transition-colors"
          >
            Mulai {title ?? "Pre-test"}
          </button>
        </div>
      </section>
    </div>
  );
}

export default RulesScreen;
