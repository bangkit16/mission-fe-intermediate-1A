import Footer from "../common/Footer";
import Header from "../common/Header";

function LayoutBeranda({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col max-w-300 mx-auto w-full px-3 py-4">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default LayoutBeranda;
