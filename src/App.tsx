import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import Beranda from "./pages/Beranda";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Beranda />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
