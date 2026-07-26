import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import SectionContainer from "../components/common/SectionContainer";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import CheckoutCard from "../features/produk/components/CheckoutCard";
import Card from "../components/common/Card";
import { PaymentMethodSelector, type PaymentCategory } from "../features/ganti-metode/components/PaymentMethodSelector";
import { ChangeMethodAccordion } from "../features/ganti-metode/components/ChangeMethodAccordion";
import { getCourseById, type Course } from "../services/api/courseService";
import { getAllPaymentMethods } from "../services/api/paymentMethodsService";

// Data accordion untuk ubah metode pembayaran
const changeMethodSections = [
  { id: "transfer-bank", label: "Transfer Bank" },
  { id: "e-wallet", label: "E-Wallet" },
  { id: "credit-card", label: "Kartu Kredit/Debit" },
];

function GantiMetode() {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [paymentCategories, setPaymentCategories] = useState<PaymentCategory[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    getCourseById(id).then(setCourse);
  }, [id]);

  useEffect(() => {
    getAllPaymentMethods().then((groups) => {
      const cats = groups[0]?.categories ?? [];
      setPaymentCategories(cats as PaymentCategory[]);
    });
  }, []);

  // State untuk accordion Card 1 — metode pembayaran terpilih
  const [selectedMethod, setSelectedMethod] = useState<string>("");

  // State untuk accordion Card 1 & 2 — kategori mana yang terbuka
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  // default selection & open categories once data loaded
  useEffect(() => {
    if (paymentCategories.length > 0) {
      if (!selectedMethod) {
        const first = paymentCategories[0]?.methods[0]?.id;
        if (first) setSelectedMethod(first);
      }
      if (openCategories.length === 0) {
        setOpenCategories(paymentCategories.map((c) => c.id));
      }
    }
  }, [paymentCategories]);

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
            // checkoutLink={`/produk/${id}/metode`}
          />
        </div>
      </SectionContainer>
    </LayoutBeranda>
  );
}

export default GantiMetode;
