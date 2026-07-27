import { useState } from "react";
import { Link, useNavigate } from "react-router";
import LayoutAuth from "../components/layout/LayoutAuth";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import PasswordInput from "../features/auth/components/PasswordInput";
import Divider from "../features/auth/components/Divider";
import AuthHeading from "../features/auth/components/AuthHeading";
import AuthCard from "../features/auth/components/AuthCard";
import { useMutation } from "@tanstack/react-query";
import { createUser, getUserById } from "../services/api/usersService";

function Register() {
  const [namaLengkap, setNamaLengkap] = useState("");
  const [email, setEmail] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("Wanita");
  const [kodeNegara, setKodeNegara] = useState("+62");
  const [nomorHp, setNomorHp] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState("");

  const navigate = useNavigate();

  const { mutate : registerUserMutate} = useMutation({
    mutationFn: createUser,
  });

  const {mutate: getUserByIdMutate} = useMutation({
    mutationFn: getUserById,
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (password !== konfirmasiPassword) {
      alert("Password dan konfirmasi password tidak cocok");
      return;
    }

    registerUserMutate({
      fullName: namaLengkap,
      email,
      gender: jenisKelamin,
      countryCode: kodeNegara,
      phoneNumber: nomorHp,
      password,
    } , {
      onSuccess: (data) => {
        const id = data.name;
        getUserByIdMutate(id, {

          onSuccess: (user) => {
            console.log(user);
            navigate("/");
          }
        });
      },
      onError: (error) => {
        alert(error);
      }
    });
  };

  return (
    <LayoutAuth>
      <AuthCard>
        <AuthHeading
          title="Pendaftaran Akun"
          subtitle="Yuk, daftarkan akunmu sekarang juga!"
        />

        {/* FORM */}
        <form className="flex flex-col gap-4 md:gap-5" onSubmit={handleSubmit}>
          {/* Nama */}
          <InputField
            type="text"
            label="Nama Lengkap"
            required
            placeholder="Nama lengkap Anda"
            value={namaLengkap}
            onChange={(e) => setNamaLengkap(e.target.value)}
          />

          {/* Email */}
          <InputField
            type="email"
            label="E-Mail"
            required
            placeholder="contoh@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Jenis Kelamin (mobile only) */}
          <div className="block md:hidden">
            <label className="block text-sm md:text-lg text-[#666] mb-2 md:mb-2.5">
              Jenis Kelamin <span className="text-[#ff5a2c]">*</span>
            </label>
            <select
              className="w-full h-12 md:h-14 border border-[#dddddd] rounded px-4 text-[15px] md:text-base bg-white outline-none"
              value={jenisKelamin}
              onChange={(e) => setJenisKelamin(e.target.value)}
            >
              <option>Wanita</option>
              <option>Pria</option>
            </select>
          </div>

          {/* Nomor HP */}
          <div>
            <label className="block text-sm md:text-lg text-[#666] mb-2 md:mb-2.5">
              No. Hp <span className="text-[#ff5a2c]">*</span>
            </label>

            <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[150px_1fr] md:grid-cols-[180px_1fr] gap-2.5 md:gap-3.5">
              <select
                className="h-12 md:h-14 border border-[#dddddd] rounded px-3 text-sm md:text-lg text-[#444] bg-white outline-none cursor-pointer"
                value={kodeNegara}
                onChange={(e) => setKodeNegara(e.target.value)}
              >
                <option value="+62">🇮🇩 +62</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+65">🇸🇬 +65</option>
                <option value="+60">🇲🇾 +60</option>
                <option value="+63">🇵🇭 +63</option>
                <option value="+81">🇯🇵 +81</option>
                <option value="+82">🇰🇷 +82</option>
                <option value="+86">🇨🇳 +86</option>
                <option value="+91">🇮🇳 +91</option>
                <option value="+61">🇦🇺 +61</option>
                <option value="+33">🇫🇷 +33</option>
                <option value="+49">🇩🇪 +49</option>
                <option value="+39">🇮🇹 +39</option>
                <option value="+55">🇧🇷 +55</option>
              </select>

              <InputField
                type="text"
                placeholder="81234567890"
                className="rounded"
                value={nomorHp}
                onChange={(e) => setNomorHp(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <PasswordInput
            label="Kata Sandi"
            required
            placeholder="Buat kata sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Confirm Password */}
          <PasswordInput
            label="Konfirmasi Kata Sandi"
            required
            placeholder="Ulangi kata sandi"
            value={konfirmasiPassword}
            onChange={(e) => setKonfirmasiPassword(e.target.value)}
          />

          {/* Forgot */}
          <div className="text-right -mt-2">
            <Link
              to="/lupa-password"
              className="text-[15px] md:text-base text-[#666] no-underline"
            >
              Lupa Password?
            </Link>
          </div>

          {/* Buttons */}
          <Button type="submit" variant="primary">
            Daftar
          </Button>

          <Button to="/login" variant="secondary">
            Masuk
          </Button>

          {/* Divider */}
          <Divider
            text="atau"
            textClassName="text-[#666] text-base md:text-lg"
          />

          {/* Google */}
          <Button variant="google">
            <span className="[&>svg]:w-6 [&>svg]:h-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
            </span>
            Daftar dengan Google
          </Button>
        </form>
      </AuthCard>
    </LayoutAuth>
  );
}

export default Register;
