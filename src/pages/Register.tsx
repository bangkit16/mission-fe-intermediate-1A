import LayoutAuth from "../components/layout/LayoutAuth";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import PasswordInput from "../features/auth/components/PasswordInput";
import Divider from "../features/auth/components/Divider";
import AuthHeading from "../features/auth/components/AuthHeading";
import AuthCard from "../features/auth/components/AuthCard";

function Register() {
  return (
    <LayoutAuth>
      <AuthCard>
        <AuthHeading
          title="Pendaftaran Akun"
          subtitle="Yuk, daftarkan akunmu sekarang juga!"
        />

        {/* FORM */}
        <form className="flex flex-col gap-5 max-md:gap-4">
          {/* Nama */}
          <InputField
            type="text"
            label="Nama Lengkap"
            required
            placeholder="Nama lengkap Anda"
          />

          {/* Email */}
          <InputField
            type="email"
            label="E-Mail"
            required
            placeholder="contoh@email.com"
          />

          {/* Jenis Kelamin (mobile only) */}
          <div className="hidden max-md:block">
            <label className="block text-lg max-md:text-base text-[#666] mb-2.5 max-md:mb-2">
              Jenis Kelamin <span className="text-[#ff5a2c]">*</span>
            </label>
            <select className="w-full h-14 max-md:h-12 border border-[#dddddd] rounded px-4 text-base max-md:text-[15px] bg-white outline-none">
              <option>Wanita</option>
              <option>Pria</option>
            </select>
          </div>

          {/* Nomor HP */}
          <div>
            <label className="block text-lg max-md:text-base text-[#666] mb-2.5 max-md:mb-2">
              No. Hp <span className="text-[#ff5a2c]">*</span>
            </label>

            <div className="grid grid-cols-[160px_1fr] max-md:grid-cols-[124px_1fr] max-[480px]:grid-cols-[110px_1fr] gap-3.5 max-md:gap-2.5">
              <div className="h-14 max-md:h-12 border border-[#dddddd] rounded flex items-center px-3 gap-2.5">
                <div className="w-8 max-md:w-7 h-6 max-md:h-5 rounded-sm border border-[#ddd] bg-[linear-gradient(to_bottom,#e70011_0%,#e70011_50%,#ffffff_50%,#ffffff_100%)]"></div>
                <span className="text-lg max-md:text-base text-[#444]">
                  +62
                </span>
                <span className="ml-auto text-[#888]">⌄</span>
              </div>

              <InputField
                type="text"
                placeholder="81234567890"
                className="rounded max-md:rounded"
              />
            </div>
          </div>

          {/* Password */}
          <PasswordInput
            label="Kata Sandi"
            required
            placeholder="Buat kata sandi"
          />

          {/* Confirm Password */}
          <PasswordInput
            label="Konfirmasi Kata Sandi"
            required
            placeholder="Ulangi kata sandi"
          />

          {/* Forgot */}
          <div className="text-right -mt-2">
            <a
              href="#"
              className="text-base max-md:text-[15px] text-[#666] no-underline"
            >
              Lupa Password?
            </a>
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
            textClassName="text-[#666] text-lg max-md:text-base"
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
