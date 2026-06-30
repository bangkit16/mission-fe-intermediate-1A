import Header from "../common/Header";

function LayoutAuth({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center">{children}</main>
    </>
  );
}

export default LayoutAuth;
