import CheckoutTimer from "../common/CheckoutTimer";
import Footer from "../common/Footer";
import Header from "../common/Header";
import CheckoutProgress from "../common/CheckoutProgress";

function LayoutBeranda({
  children,
  isCheckoutProgress = false,
  isCheckoutTimer = false,
  currentStep,
}: {
  children: React.ReactNode;
  isCheckoutProgress?: boolean;
  isCheckoutTimer?: boolean;
  /** When set, renders checkout progress in Header (desktop) + inside main (mobile) */
  currentStep?: 1 | 2 | 3;
}) {
  return (
    <>
      <Header checkoutStep={currentStep} />
      {isCheckoutTimer && <CheckoutTimer />}
      <main className="flex-1 flex flex-col max-w-300 mx-auto w-full px-3 py-4">
        {currentStep && (
          <div className="md:hidden">
            <CheckoutProgress currentStep={currentStep} />
          </div>
        )}
        {children}
      </main>
      {!isCheckoutProgress && <Footer />}
    </>
  );
}

export default LayoutBeranda;
