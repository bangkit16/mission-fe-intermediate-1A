import { useParams } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import SectionContainer from "../components/common/SectionContainer";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import CheckoutCard from "../features/produk/components/CheckoutCard";
import Card from "../components/common/Card";
import {
  PaymentMethodSelector,
  type PaymentCategory,
} from "../features/metode/components/PaymentMethodSelector";
import { OrderSummary } from "../features/metode/components/OrderSummary";
import { getCourseById } from "../services/api/courseService";
import {
  getAllPaymentMethods,
} from "../services/api/paymentMethodsService";

function Metode() {
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

  const [selectedMethod, setSelectedMethod] = useState<string>(
    () => paymentCategories[0]?.methods[0]?.id ?? "",
  );

  const [openCategories, setOpenCategories] = useState<string[]>(
    () => paymentCategories.map((c) => c.id),
  );

  if (!course) {
    return (
      <LayoutBeranda>
        <SectionContainer>
          <p className="py-20 text-center text-gray-500">Memuat...</p>
        </SectionContainer>
      </LayoutBeranda>
    );
  }

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
          />
        </div>
      </SectionContainer>
    </LayoutBeranda>
  );
}

export default Metode;
