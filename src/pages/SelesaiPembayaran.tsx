import { useState } from "react";
import { useNavigate } from "react-router";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import { PaymentSuccessCard } from "../features/selesai-pembayaran/components/PaymentSuccessCard";
import { PaymentDelayedCard } from "../features/selesai-pembayaran/components/PaymentDelayedCard";

function SelesaiPembayaran() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"success" | "delayed">("success");

  return (
    <LayoutBeranda isCheckoutProgress={false} currentStep={3}>
      <div className="w-full max-w-2xl mx-auto p-4 flex items-center justify-center min-h-[60vh]">
        {mode === "success" ? (
          <PaymentSuccessCard
            onAction={() => navigate("/pesanan")}
          />
        ) : (
          <PaymentDelayedCard />
        )}
      </div>

      {/* Debug Toggle */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        <button
          type="button"
          onClick={() => setMode("success")}
          className={`px-5 py-2 text-sm font-semibold rounded-xl shadow-md transition-colors ${
            mode === "success"
              ? "bg-[#22C55E] text-white"
              : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
          }`}
        >
          Success
        </button>
        <button
          type="button"
          onClick={() => setMode("delayed")}
          className={`px-5 py-2 text-sm font-semibold rounded-xl shadow-md transition-colors ${
            mode === "delayed"
              ? "bg-amber-500 text-white"
              : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
          }`}
        >
          Delayed
        </button>
      </div>
    </LayoutBeranda>
  );
}

export default SelesaiPembayaran;
