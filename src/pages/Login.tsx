import LayoutAuth from "../components/layout/LayoutAuth";
import Button from "../components/common/Button";

function Login() {
  return (
    <LayoutAuth>
      <div className="w-full max-w-[600px] mx-auto bg-white border border-[#e5e5e5] rounded p-10 max-md:p-7 max-[480px]:p-5 my-16 max-md:my-7">
        <div className="text-center mb-9">
          <h2 className="text-4xl max-md:text-3xl max-[480px]:text-[28px] font-bold mb-3">Masuk ke Akun</h2>
          <p className="text-[#7b7b7b] text-base max-md:text-[15px]">Yuk, lanjutin belajarmu di videobelajar.</p>
        </div>

        <form>
          {/* EMAIL */}
          <div className="mb-6">
            <label className="block mb-2.5 text-[#6d6d6d] text-base">
              E-Mail <span className="text-[#ff6336]">*</span>
            </label>
            <input
              type="email"
              placeholder="babymonster@yg.co.id"
              className="w-full h-14 max-[480px]:h-12 border border-[#dcdcdc] rounded px-4 text-base max-[480px]:text-[15px] placeholder:text-[#333] outline-none"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <label className="block mb-2.5 text-[#6d6d6d] text-base">
              Kata Sandi <span className="text-[#ff6336]">*</span>
            </label>

            <div className="relative">
              <input
                type="password"
                placeholder="**********"
                className="w-full h-14 max-[480px]:h-12 border border-[#dcdcdc] rounded max-[480px]:rounded px-4 text-base max-[480px]:text-[15px] placeholder:text-[#333] outline-none"
              />

              <button type="button" className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9d9d9d] text-xl">👁</button>
            </div>
          </div>

          {/* FORGOT */}
          <div className="text-right mb-6">
            <a href="#" className="text-[#707070] text-base max-[480px]:text-[15px] no-underline">Lupa Password?</a>
          </div>

          {/* BUTTON LOGIN */}
          <Button type="submit" variant="primary">
            Masuk
          </Button>

          {/* BUTTON REGISTER */}
          <Button to="/register" variant="secondary" className="mt-4">
            Daftar
          </Button>

          {/* DIVIDER */}
          <div className="my-7 flex items-center gap-4">
            <span className="flex-1 h-px bg-[#dddddd]"></span>
            <p className="text-[#777] text-base">atau</p>
            <span className="flex-1 h-px bg-[#dddddd]"></span>
          </div>

          {/* GOOGLE */}
          <Button variant="google" className="mt-0">
            <span className="[&>svg]:w-[26px] [&>svg]:h-[26px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg>
            </span>
            Masuk dengan Google
          </Button>
        </form>
      </div>
    </LayoutAuth>
  );
}

export default Login;
