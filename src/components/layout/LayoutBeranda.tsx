import Footer from "./Footer";
import Header from "./Header";

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
