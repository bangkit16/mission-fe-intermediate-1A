import { useState } from "react";
import useIsMobile from "../../../hooks/useIsMobile";
import { ArrowLeft, ArrowRight } from "lucide-react";
import DonePreTestModal from "../DonePreTestModal";
import RulesScreen from "./RulesScreen";
import CongratsScreen from "./CongratsScreen";
import TryAgain from "./TryAgain";
import type { Question } from "../../../services/api/courseContentService";

type PreTestPhase = "rules" | "quiz" | "passed" | "failed";

interface QuizScreenProps {
  onComplete: () => void;
  questions: Question[];
  totalQuestions: number;
  durationMinutes?: number;
  passingScore?: number;
  title?: string;
}

function QuizScreen({
  onComplete,
  questions,
  totalQuestions,
  durationMinutes,
  passingScore,
  title,
}: QuizScreenProps) {
  const isMobile = useIsMobile();
  const [phase, setPhase] = useState<PreTestPhase>("rules");

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [openDoneModal, setOpenDoneModal] = useState(false);

  const currentQ = questions[currentQuestion - 1];
  const options = currentQ?.options ?? [];
  const questionCount = questions.length;

  // ── Rules phase ──
  if (phase === "rules") {
    return (
      <RulesScreen
        onStart={() => setPhase("quiz")}
        durationMinutes={durationMinutes}
        totalQuestions={totalQuestions}
        passingScore={passingScore}
        title={title}
      />
    );
  }

  // ── Result: passed ──
  if (phase === "passed") {
    return <CongratsScreen onContinue={onComplete} />;
  }

  // ── Result: failed ──
  if (phase === "failed") {
    return (
      <TryAgain
        onRetry={() => {
          setPhase("quiz");
          setCurrentQuestion(1);
          setSelectedOption("");
        }}
      />
    );
  }

  // ── Quiz phase ──
  return (
    <div
      className={`w-full h-full bg-white ${
        isMobile ? "flex flex-col" : "flex flex-row overflow-hidden"
      }`}
    >
      {/* LEFT SIDE: LIST SOAL */}
      <section
        className={`bg-white flex flex-col p-6 border-r border-gray-100 ${
          isMobile ? "w-full border-b" : "w-[320px] shrink-0"
        }`}
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">List Soal</h3>

        <div className="grid grid-cols-5 gap-2 mb-6">
          {Array.from({ length: questionCount }, (_, i) => i + 1).map(
            (num) => {
              const isActive = currentQuestion === num;
              return (
                <button
                  key={num}
                  onClick={() => setCurrentQuestion(num)}
                  className={`aspect-square flex items-center justify-center font-semibold text-sm rounded-lg border transition-all ${
                    isActive
                      ? "bg-orange-50 border-orange-500 text-orange-600 font-bold"
                      : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {num}
                </button>
              );
            },
          )}
        </div>

        <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
          <p className="text-sm text-sky-600 font-medium leading-relaxed">
            Selesaikan semua soal untuk mengakhiri quiz
          </p>
        </div>
      </section>

      {/* RIGHT SIDE: PERTANYAAN & PILIHAN */}
      <section
        className={`flex-1 flex flex-col justify-between bg-white p-6 md:p-12 overflow-y-auto ${
          isMobile ? "" : ""
        }`}
      >
        <div className="w-full mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Pertanyaan {currentQuestion}
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            {currentQ?.question ?? ""}
          </p>

          <div className="flex flex-col gap-3">
            {options.map((option) => {
              const isSelected = selectedOption === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                    isSelected
                      ? "border-green-500 bg-white"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      isSelected ? "border-green-500" : "border-gray-300"
                    }`}
                  >
                    {isSelected && (
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    )}
                  </div>
                  <span
                    className={`text-sm md:text-base ${isSelected ? "text-green-600 font-medium" : "text-gray-700"}`}
                  >
                    {option.text}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-full mx-auto flex items-center justify-between gap-4 mt-10 pt-4 border-t border-gray-100">
          <button
            type="button"
            disabled={currentQuestion === 1}
            onClick={() => setCurrentQuestion((prev) => Math.max(prev - 1, 1))}
            className="w-full text-xs md:text-lg flex justify-center items-center gap-2 px-6 py-3 border-2 border-green-300 text-green-400 font-semibold rounded-xl hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Sebelumnya
          </button>

          <button
            type="button"
            onClick={() => {
              if (currentQuestion === questionCount) {
                setOpenDoneModal(true);
              } else {
                setCurrentQuestion((prev) => prev + 1);
                setSelectedOption("");
              }
            }}
            className="w-full text-xs md:text-lg flex justify-center items-center gap-2 px-6 py-3 border-2 border-green-500 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
          >
            {currentQuestion === questionCount ? "Selesai" : "Selanjutnya"}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <DonePreTestModal
        openModal={openDoneModal}
        onClose={() => setOpenDoneModal(false)}
        onSubmit={() => {
          setOpenDoneModal(false);
          setPhase("passed");
        }}
      />
    </div>
  );
}

export default QuizScreen;
