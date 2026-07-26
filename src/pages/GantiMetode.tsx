import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import SectionContainer from "../components/common/SectionContainer";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import CheckoutCard from "../features/produk/components/CheckoutCard";
import Card from "../components/common/Card";
import { PaymentMethodSelector, type PaymentCategory } from "../features/ganti-metode/components/PaymentMethodSelector";
import { ChangeMethodAccordion } from "../features/ganti-metode/components/ChangeMethodAccordion";
import { getCourseById } from "../services/api/courseService";
import { getAllPaymentMethods } from "../services/api/paymentMethodsService";

// Data accordion untuk ubah metode pembayaran
const changeMethodSections = [
  { id: "transfer-bank", label: "Transfer Bank" },
  { id: "e-wallet", label: "E-Wallet" },
  { id: "credit-card", label: "Kartu Kredit/Debit" },
];

function GantiMetode() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: course } = useQuery({
    queryKey: ["course", id],
    queryFn: () => getCourseById(id!),
    enabled: !!id,
  });

  const { data: paymentGroups } = useQuery({
    queryKey: ["payment-methods"],
    queryFn: getAllPaymentMethods,
  });

  const paymentCategories = (paymentGroups?.[0]?.categories ?? []) as PaymentCategory[];

  // State untuk accordion Card 1 — metode pembayaran terpilih
  const [selectedMethod, setSelectedMethod] = useState<string>(
    () => paymentCategories[0]?.methods[0]?.id ?? "",
  );

  // State untuk accordion Card 1 & 2 — kategori mana yang terbuka
  const [openCategories, setOpenCategories] = useState<string[]>(
    () => paymentCategories.map((c) => c.id),
  );

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  if (!course) {
    return (
      <LayoutBeranda>
        <SectionContainer>
          <p className="py-20 text-center text-gray-500">Memuat...</p>
        </SectionContainer>
      </LayoutBeranda>
    );
  }

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
                onPayNow={() => navigate(`/produk/${id}/pembayaran`)}
              />
            </Card>
          </main>
          <CheckoutCard
            course={course}
          />
        </div>
      </SectionContainer>
    </LayoutBeranda>
  );
}

export default GantiMetode;
