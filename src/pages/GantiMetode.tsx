import { useState } from "react";
import { useNavigate } from "react-router";
import SectionContainer from "../components/common/SectionContainer";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import CheckoutCard from "../features/produk/components/CheckoutCard";
import Card from "../components/common/Card";
import {
  PaymentMethodSelector,
  
} from "../features/ganti-metode/components/PaymentMethodSelector";
import { ChangeMethodAccordion } from "../features/ganti-metode/components/ChangeMethodAccordion";
import { paymentCategories } from "../features/ganti-metode/data/paymentCategories";

// Data accordion untuk ubah metode pembayaran
const changeMethodSections = [
  { id: "transfer-bank", label: "Transfer Bank" },
  { id: "e-wallet", label: "E-Wallet" },
  { id: "credit-card", label: "Kartu Kredit/Debit" },
];

function GantiMetode() {
  const navigate = useNavigate();
  // State untuk accordion Card 1 — metode pembayaran terpilih
  const [selectedMethod, setSelectedMethod] = useState<string>("bca");

  // State untuk accordion Card 1 & 2 — kategori mana yang terbuka
  const [openCategories, setOpenCategories] = useState<string[]>([
    "transfer-bank",
  ]);

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <LayoutBeranda isCheckoutProgress={false} currentStep={2}>
      <SectionContainer>
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-start mt-5">
          <main className="flex-1 w-full space-y-6">
            {/* CARD 1: RINGKASAN BELANJA */}
            <Card className="p-2 md:p-4 mb-5">
              <PaymentMethodSelector
                categories={paymentCategories}
                openCategoryIds={openCategories}
                selectedMethodId={selectedMethod}
                onToggleCategory={toggleCategory}
                onSelectMethod={setSelectedMethod}
              />
            </Card>

            {/* CARD 2: UBAH METODE PEMBAYARAN */}
            <Card className="p-4 md:p-6 bg-white space-y-4">
              <ChangeMethodAccordion
                sections={changeMethodSections}
                openSectionIds={openCategories}
                onToggleSection={toggleCategory}
                payButtonLabel="Bayar Sekarang"
                onPayNow={() => navigate("/produk/belajar-menyenangkan/pembayaran")}
              />
            </Card>
          </main>
          <CheckoutCard />
        </div>
      </SectionContainer>
    </LayoutBeranda>
  );
}

export default GantiMetode;
