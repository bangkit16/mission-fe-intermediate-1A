import CheckoutTimer from "../common/CheckoutTimer";
import Footer from "../common/Footer";
import Header from "../common/Header";

function LayoutBeranda({
  children,
  isCheckoutProgress = false,
  isCheckoutTimer = false,
}: {
  children: React.ReactNode;
  isCheckoutProgress?: boolean;
  isCheckoutTimer?: boolean;
}) {
  return (
    <>
      <Header />
      {isCheckoutTimer && <CheckoutTimer />}
      <main className="flex-1 flex flex-col max-w-300 mx-auto w-full px-3 py-4">
        {children}
      </main>
      {!isCheckoutProgress && <Footer />}
      {/* <Footer /> */}
    </>
  );
}

export default LayoutBeranda;
