import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import SectionContainer from "../components/common/SectionContainer";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import CheckoutCard from "../features/produk/components/CheckoutCard";
import Card from "../components/common/Card";
import { VirtualAccountInfo } from "../features/pembayaran/components/VirtualAccountInfo";
import { PaymentSummary } from "../features/pembayaran/components/PaymentSummary";
import {
  PaymentGuide,
  type GuideEntry,
} from "../features/pembayaran/components/PaymentGuide";
import { getCourseById, type Course } from "../services/api/courseService";
import { getAllPaymentGuides } from "../services/api/paymentGuideService";

function Pembayaran() {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [guideEntries, setGuideEntries] = useState<GuideEntry[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    getCourseById(id).then(setCourse);
  }, [id]);

  useEffect(() => {
    getAllPaymentGuides().then((all) => {
      // ambil guide untuk BCA (methodId: 1a26c8cc-9991-4419-a8ce-b7c968c1046c)
      // fallback ke guide pertama
      const entry = all.find(
        (g) => g.methodId === "1a26c8cc-9991-4419-a8ce-b7c968c1046c",
      ) ?? all[0];
      if (entry) setGuideEntries(entry.guides as GuideEntry[]);
    });
  }, []);

  // State untuk melacak accordion panduan cara bayar mana saja yang terbuka
  const [openGuides, setOpenGuides] = useState<string[]>([]);

  // buka semua guides setelah data loaded
  useEffect(() => {
    if (guideEntries.length > 0 && openGuides.length === 0) {
      setOpenGuides(guideEntries.map((g) => g.id));
    }
  }, [guideEntries]);

  const toggleGuide = (id: string) => {
    setOpenGuides((prev) =>
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
    <LayoutBeranda
      isCheckoutProgress={false}
      isCheckoutTimer={true}
      currentStep={2}
    >
      <SectionContainer>
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-start mt-5">
          <main className="flex-1 w-full space-y-6">
            {/* CARD 1: METODE PEMBAYARAN & RINGKASAN PESANAN */}
            <Card className="p-4 md:p-6 bg-white">
              <h2 className="text-base md:text-lg font-bold text-gray-900 mb-4">
                Metode Pembayaran
              </h2>

              <VirtualAccountInfo
                bankLogoUrl="https://placehold.co/120x40?text=BCA"
                bankName="BCA"
                virtualAccountDisplay="11739 081234567890"
                virtualAccountFull="11739081234567890"
              />

              <PaymentSummary
                // productName="Video Learning: Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager."
                productName={`Video Learning: ${course?.title}`}
                productPrice={course?.price}
                adminFee={7000}
                total={course?.price + 7000}
                onChangeMethod={() => navigate(`/produk/${id}/ganti-metode`)}
                onPayNow={() => navigate(`/produk/${id}/pembayaran-selesai`)}
              />
            </Card>

            {/* CARD 2: TATA CARA PEMBAYARAN */}
            <PaymentGuide
              guides={guideEntries}
              openGuideIds={openGuides}
              onToggleGuide={toggleGuide}
            />
          </main>
          <CheckoutCard
            course={course}
            // checkoutLink="/produk/belajar-menyenangkan/metode"
          />
        </div>
      </SectionContainer>
    </LayoutBeranda>
  );
}

export default Pembayaran;
