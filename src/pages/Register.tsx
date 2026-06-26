import LayoutAuth from "../components/layout/LayoutAuth";

function Register() {
  return (
    <LayoutAuth>
      <div className="w-full max-w-145 mx-auto bg-white border border-[#e8e8e8] rounded max-md:rounded-sm p-10 max-md:p-[26px_20px] max-[480px]:p-[22px_18px] my-12 max-md:my-7">
        {/* Title */}
        <div className="text-center mb-8 max-md:mb-6">
          <h2 className="text-4xl max-lg:text-[44px] max-md:text-[34px] max-[480px]:text-[28px] font-extrabold leading-tight mb-3 max-md:mb-2.5">
            Pendaftaran Akun
          </h2>
          <p className="text-base max-md:text-[15px] text-[#777]">
            Yuk, daftarkan akunmu sekarang juga!
          </p>
        </div>

        {/* FORM */}
        <form className="flex flex-col gap-5 max-md:gap-4">
          {/* Nama */}
          <div>
            <label className="block text-lg max-md:text-base text-[#666] mb-2.5 max-md:mb-2">
              Nama Lengkap <span className="text-[#ff5a2c]">*</span>
            </label>
            <input
              type="text"
              className="w-full h-14 max-md:h-12 border border-[#dddddd] rounded px-4 text-base max-md:text-[15px] bg-white outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg max-md:text-base text-[#666] mb-2.5 max-md:mb-2">
              E-Mail <span className="text-[#ff5a2c]">*</span>
            </label>
            <input
              type="email"
              className="w-full h-14 max-md:h-12 border border-[#dddddd] rounded px-4 text-base max-md:text-[15px] bg-white outline-none"
            />
          </div>

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
              <div className="hh-14 max-md:h-12 border border-[#dddddd] rounded flex items-center px-3 gap-2.5">
                <div className="w-8 max-md:w-7 h-6 max-md:h-5 rounded-sm border border-[#ddd] bg-[linear-gradient(to_bottom,#e70011_0%,#e70011_50%,#ffffff_50%,#ffffff_100%)]"></div>
                <span className="text-lg max-md:text-base text-[#444]">
                  +62
                </span>
                <span className="ml-auto text-[#888]">⌄</span>
              </div>

              <input
                type="text"
                className="w-full h-14 max-md:h-12 border border-[#dddddd] rounded px-4 text-base max-md:text-[15px] bg-white outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-lg max-md:text-base text-[#666] mb-2.5 max-md:mb-2">
              Kata Sandi <span className="text-[#ff5a2c]">*</span>
            </label>

            <div className="relative">
              <input
                type="password"
                className="w-full h-14 max-md:h-12 border border-[#dddddd] rounded px-4 pr-12 text-base max-md:text-[15px] bg-white outline-none"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#999] text-[22px] max-md:text-xl cursor-pointer">
                👁
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-lg max-md:text-base text-[#666] mb-2.5 max-md:mb-2">
              Konfirmasi Kata Sandi <span className="text-[#ff5a2c]">*</span>
            </label>

            <div className="relative">
              <input
                type="password"
                className="w-full h-14 max-md:h-12 border border-[#dddddd] rounded px-4 pr-12 text-base max-md:text-[15px] bg-white outline-none"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#999] text-[22px] max-md:text-xl cursor-pointer">
                👁
              </span>
            </div>
          </div>

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
          <button
            type="submit"
            className="w-full h-14 max-md:h-12 bg-[#39c93f] text-white text-lg max-[480px]:text-[17px] font-medium rounded-[10px] cursor-pointer border-none hover:bg-[#2fb836] transition-colors duration-300"
          >
            Daftar
          </button>

          <a
            href="/login"
            className="w-full h-14 max-md:h-12 bg-[#d9ecd2] text-[#39c93f] text-lg max-[480px]:text-[17px] font-medium rounded-[10px] flex items-center justify-center no-underline cursor-pointer border-none"
          >
            Masuk
          </a>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <span className="flex-1 h-px bg-[#dddddd]"></span>
            <p className="text-[#666] text-lg max-md:text-base">atau</p>
            <span className="flex-1 h-px bg-[#dddddd]"></span>
          </div>

          {/* Google */}
          <a
            href="#"
            className="w-full h-14 max-md:h-12 border border-[#dddddd] bg-white rounded-[10px] text-lg max-[480px]:text-base font-bold text-[#444] flex items-center justify-center gap-3 cursor-pointer no-underline"
          >
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
          </a>
        </form>
      </div>
    </LayoutAuth>
  );
}

export default Register;
