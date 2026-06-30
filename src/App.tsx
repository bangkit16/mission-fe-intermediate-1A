import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import Beranda from "./pages/Beranda";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SemuaProduk from "./pages/SemuaProduk";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Beranda />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        <Route path="/produk" element={<SemuaProduk />} />
      </Route>
    </Routes>
  );
}

export default App;
