import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import Beranda from "./pages/Beranda";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SemuaProduk from "./pages/SemuaProduk";
import Produk from "./pages/Produk";
import Metode from "./pages/Metode";
import Pembayaran from "./pages/Pembayaran";
import GantiMetode from "./pages/GantiMetode";
import SelesaiPembayaran from "./pages/SelesaiPembayaran";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Beranda />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        <Route path="/produk" element={<SemuaProduk />} />
        <Route path="/produk/:slug" element={<Produk />} />
        <Route path="/produk/:slug/metode" element={<Metode />} />
        <Route path="/produk/:slug/pembayaran" element={<Pembayaran />} />
        <Route path="/produk/:slug/ganti-metode" element={<GantiMetode />} />
        <Route path="/produk/:slug/pembayaran-selesai" element={<SelesaiPembayaran />} />
      </Route>
    </Routes>
  );
}

export default App;
