import { useParams } from "react-router";
import { useEffect, useState } from "react";
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
import { getCourseById, type Course } from "../services/api/courseService";
import {
  getAllPaymentMethods,
} from "../services/api/paymentMethodsService";

function Metode() {
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [paymentCategories, setPaymentCategories] = useState<PaymentCategory[]>([]);
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAllPaymentMethods().then((groups) => {
      const cats = groups[0]?.categories ?? [];
      setPaymentCategories(cats as PaymentCategory[]);
      // default ke metode pertama
      const first = cats[0]?.methods[0]?.id;
      if (first) setSelectedMethod(first);
      // buka semua kategori
      setOpenCategories(cats.map((c: any) => c.id));
    });
  }, []);

  useEffect(() => {
    if (!id) return;
    getCourseById(id).then(setCourse);
  }, [id]);

  if (!course) {
    return (
      <LayoutBeranda>
        <SectionContainer>
          <p className="py-20 text-center text-gray-500">Memuat...</p>
        </SectionContainer>
      </LayoutBeranda>
    );
  }

  // State untuk metode pembayaran terpilih (default: bca sesuai gambar)

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
                productPrice={course.price}
                adminFee={7000}
                total={course.price + 7000}
                buttonLabel="Lanjutkan Pembayaran"
                onAction={() => navigate(`/produk/${id}/pembayaran`)}
              />
            </Card>
          </main>
          <CheckoutCard
            course={course}
            // checkoutLink={`/produk/${id}/pembayaran`}
          />
        </div>
      </SectionContainer>
    </LayoutBeranda>
  );
}

export default Metode;
