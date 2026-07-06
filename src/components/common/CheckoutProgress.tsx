import React from "react";

interface Step {
  id: number;
  label: string;
}

interface CheckoutProgressProps {
  currentStep?: 1 | 2 | 3;
}

const CheckoutProgress: React.FC<CheckoutProgressProps> = ({
  currentStep = 1,
}) => {
  const steps: Step[] = [
    { id: 1, label: "Pilih Metode" },
    { id: 2, label: "Bayar" },
    { id: 3, label: "Selesai" },
  ];

  return (
    <div className="w-full flex items-center justify-center py-4 px-2 md:py-6 bg-transparent select-none">
      <div className="flex items-center justify-between w-full max-w-xl md:justify-center">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;

          return (
            <React.Fragment key={step.id}>
              {/* Item Step: Lingkaran & Teks */}
              <div className="flex items-center gap-1.5 md:gap-3">
                {/* Lingkaran Progress */}
                <div
                  className={`w-6 h-6 md:w-7 md:h-7 rounded-full border-2 flex items-center justify-center shrink-0 bg-white transition-colors duration-200 ${
                    isActive || isCompleted
                      ? "border-[#22C55E]"
                      : "border-[#BFC3C7]"
                  }`}
                >
                  <div
                    className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${
                      isActive || isCompleted ? "bg-[#22C55E]" : "bg-[#BFC3C7]"
                    }`}
                  />
                </div>

                {/* Label Tahapan: Responsif menyesuaikan ukuran font */}
                <span
                  className={`text-[11px] xs:text-xs md:text-sm font-bold transition-colors duration-200 ${
                    isActive ? "text-gray-900" : "text-[#BFC3C7]"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {/* Garis Penghubung antar Step */}
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 min-w-[20px] md:flex-none md:w-20 lg:w-28 h-[2px] md:h-[3px] mx-2 md:mx-4 shrink-0 transition-colors duration-200 ${
                    isCompleted ? "bg-[#22C55E]" : "bg-[#BFC3C7]"
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default CheckoutProgress;
