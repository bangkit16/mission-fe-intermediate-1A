import React from "react";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import { PaymentSuccessCard } from "../features/selesai-pembayaran/components/PaymentSuccessCard";
import CheckoutProgress from "../components/common/CheckoutProgress";

function SelesaiPembayaran() {
  return (
    <LayoutBeranda isCheckoutProgress={false}>
      <CheckoutProgress currentStep={3} />
      <div className="w-full max-w-2xl mx-auto p-4 flex items-center justify-center min-h-[60vh]">
        <PaymentSuccessCard />
      </div>
    </LayoutBeranda>
  );
}

export default SelesaiPembayaran;
