import Footer from "../common/Footer";
import Header from "../common/Header";

function LayoutBeranda({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-row items-center justify-center">{children}</main>
      <Footer />
    </>
  );
}

export default LayoutBeranda;
