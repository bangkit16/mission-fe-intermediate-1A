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
import Pesanan from "./pages/Pesanan";
import Kelas from "./pages/Kelas";
import Profile from "./pages/Profile";
import CoursePage from "./pages/CoursePage";
import Sertifikat from "./pages/Sertifikat";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Beranda />} />
        <Route path="/pesanan" element={<Pesanan />} />
        <Route path="/kelas" element={<Kelas />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/produk" element={<SemuaProduk />} />
        <Route path="/produk/:id" element={<Produk />} />
        <Route path="/produk/:id/metode" element={<Metode />} />
        <Route path="/produk/:id/pembayaran" element={<Pembayaran />} />
        <Route path="/produk/:id/ganti-metode" element={<GantiMetode />} />
        <Route
          path="/produk/:id/pembayaran-selesai"
          element={<SelesaiPembayaran />}
        />

        <Route path="/course" element={<CoursePage />} />
        <Route path="/sertifikat" element={<Sertifikat />} />
      </Route>
    </Routes>
  );
}

export default App;
