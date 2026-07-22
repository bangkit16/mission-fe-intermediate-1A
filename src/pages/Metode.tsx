import { useState } from "react";
import { useNavigate } from "react-router";
import SectionContainer from "../components/common/SectionContainer";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import CheckoutCard from "../features/produk/components/CheckoutCard";
import Card from "../components/common/Card";
import {
  PaymentMethodSelector,
  type PaymentCategory,
} from "../features/metode/components/PaymentMethodSelector";
import { OrderSummary } from "../features/metode/components/OrderSummary";

// Struktur data list metode pembayaran berdasarkan gambar image_c24ae3.png
const paymentCategories: PaymentCategory[] = [
  {
    id: "transfer-bank",
    name: "Transfer Bank",
    methods: [
      {
        id: "bca",
        name: "Bank BCA",
        logo: "https://placehold.co/40x40?text=BCA",
      },
      {
        id: "bni",
        name: "Bank BNI",
        logo: "https://placehold.co/40x40?text=BNI",
      },
      {
        id: "bri",
        name: "Bank BRI",
        logo: "https://placehold.co/40x40?text=BRI",
      },
      {
        id: "mandiri",
        name: "Bank Mandiri",
        logo: "https://placehold.co/40x40?text=Mandiri",
      },
    ],
  },
  {
    id: "e-wallet",
    name: "E-Wallet",
    methods: [
      {
        id: "dana",
        name: "Dana",
        logo: "https://placehold.co/40x40?text=Dana",
      },
      { id: "ovo", name: "OVO", logo: "https://placehold.co/40x40?text=OVO" },
      {
        id: "linkaja",
        name: "LinkAja",
        logo: "https://placehold.co/40x40?text=LinkAja",
      },
      {
        id: "shopeepay",
        name: "Shopee Pay",
        logo: "https://placehold.co/40x40?text=SPay",
      },
    ],
  },
  {
    id: "credit-card",
    name: "Kartu Kredit/Debit",
    methods: [
      {
        id: "cc-group",
        name: "Mastercard / Visa / JCB",
        isLogosOnly: true,
        logos: [
          "https://placehold.co/50x30?text=Mastercard",
          "https://placehold.co/50x30?text=Visa",
          "https://placehold.co/50x30?text=JCB",
        ],
      },
    ],
  },
];

function Metode() {
  const navigate = useNavigate();
  // State untuk mengontrol kategori metode pembayaran mana saja yang terbuka (bisa multi-open)
  const [openCategories, setOpenCategories] = useState<string[]>([
    "transfer-bank",
    "e-wallet",
    "credit-card",
  ]);

  // State untuk metode pembayaran terpilih (default: bca sesuai gambar)
  const [selectedMethod, setSelectedMethod] = useState<string>("bca");

  const toggleCategory = (categoryId: string) => {
    setOpenCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    );
  };

  return (
    <LayoutBeranda isCheckoutProgress={false} currentStep={1}>
      <SectionContainer>
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-start">
          <main className="flex-1 w-full">
            <Card className="p-2 md:p-4 mb-5">
              <PaymentMethodSelector
                categories={paymentCategories}
                openCategoryIds={openCategories}
                selectedMethodId={selectedMethod}
                onToggleCategory={toggleCategory}
                onSelectMethod={setSelectedMethod}
              />
            </Card>

            <Card className="p-2 md:p-4 mb-5">
              <OrderSummary
                productName="Video Learning: Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager."
                productPrice={767500}
                adminFee={7000}
                total={774500}
                buttonLabel="Lanjutkan Pembayaran"
                onAction={() => navigate("/produk/belajar-menyenangkan/pembayaran")}
              />
            </Card>
          </main>
          <CheckoutCard />
        </div>
      </SectionContainer>
    </LayoutBeranda>
  );
}

export default Metode;
