function Beranda() {
  return (
    <>
      {/* HERO */}
      <section className="py-[50px] max-md:py-[35px]">
        <div className="max-w-[1200px] w-[90%] mx-auto">
          <div className="relative min-h-[380px] max-md:min-h-[420px] rounded-[18px] overflow-hidden bg-[url('https://picsum.photos/1400/800?education')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-black/58"></div>

            <div className="relative z-[2] max-w-[850px] mx-auto text-center text-white px-8 max-md:px-5 py-[70px] max-md:py-[50px]">
              <h1 className="text-5xl max-lg:text-[38px] max-md:text-[34px] max-[480px]:text-3xl leading-tight font-extrabold mb-[22px]">
                Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
                Interaktif!
              </h1>

              <p className="text-base max-md:text-[15px] text-[#f0f0f0] mb-7">
                Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
                pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
                berpartisipasi dalam latihan interaktif yang akan meningkatkan
                pemahaman Anda.
              </p>

              <a
                href="#"
                className="inline-block px-8 max-md:px-[15px] py-[15px] max-md:py-[15px] bg-[#2ecc71] text-white font-bold rounded-[10px] hover:bg-[#28b864] transition-all duration-300 max-md:w-full"
              >
                Temukan Video Course untuk Dipelajari!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE SECTION */}
      <section className="py-[50px] max-md:py-[35px]">
        <div className="max-w-[1200px] w-[90%] mx-auto">
          <div className="section-heading">
            <h2 className="text-[40px] max-md:text-3xl max-[480px]:text-[28px] font-extrabold mb-2.5">Koleksi Video Pembelajaran Unggulan</h2>
            <p className="text-[#777] mb-7">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-7 overflow-x-auto mb-[30px] pb-2.5">
            <a href="#" className="text-[#f28c28] whitespace-nowrap text-[15px] pb-2 border-b-[3px] border-[#f28c28] font-bold no-underline">Semua Kelas</a>
            <a href="#" className="text-[#666] whitespace-nowrap text-[15px] pb-2 no-underline">Pemasaran</a>
            <a href="#" className="text-[#666] whitespace-nowrap text-[15px] pb-2 no-underline">Desain</a>
            <a href="#" className="text-[#666] whitespace-nowrap text-[15px] pb-2 no-underline">Pengembangan Diri</a>
            <a href="#" className="text-[#666] whitespace-nowrap text-[15px] pb-2 no-underline">Bisnis</a>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
            {/* CARD 1 */}
            <div className="bg-white border border-[#e8e8e8] rounded-[14px] overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 max-md:flex max-md:flex-row max-md:gap-3.5 max-md:p-3.5 max-[480px]:gap-3 max-[480px]:p-3">
              <div className="p-3.5 pb-0 max-md:p-0">
                <img src="https://picsum.photos/400/250?1" alt="" className="w-full h-[210px] object-cover rounded-[10px] max-md:w-[140px] max-md:min-w-[140px] max-md:h-[140px] max-md:rounded-xl max-[480px]:w-[110px] max-[480px]:min-w-[110px] max-[480px]:h-[110px]" />
              </div>
              <div className="p-[18px] max-md:p-0 max-md:w-full">
                <h3 className="text-2xl max-md:text-lg max-[480px]:text-base leading-tight font-bold mb-3 max-md:mb-1.5 max-md:leading-[1.3]">Big 4 Auditor Financial Analyst</h3>
                <p className="text-sm max-md:text-[13px] max-[480px]:text-xs text-[#666] max-md:text-[#777] mb-[18px] max-md:mb-2.5 max-md:leading-[1.4]">
                  Mulai transformasi dengan instruktur profesional, harga yang
                  terjangkau, dan...
                </p>

                <div className="flex items-center gap-2.5 mb-[18px] max-md:mb-2.5">
                  <img src="https://i.pravatar.cc/40?img=1" alt="" className="w-[42px] h-[42px] rounded-full max-md:w-8 max-md:h-8 max-[480px]:w-7 max-[480px]:h-7" />
                  <div>
                    <h4 className="text-[15px] max-md:text-[13px] font-semibold">Jenna Ortega</h4>
                    <span className="text-[13px] max-md:text-[11px] text-[#777]">Senior Accountant di Gojek</span>
                  </div>
                </div>

                <div className="flex justify-between items-center max-md:flex-wrap max-md:gap-1">
                  <div className="text-sm max-md:text-[13px]">⭐⭐⭐ <span className="text-[#666] ml-1">3.5 (86)</span></div>
                  <div className="text-3xl max-md:text-[22px] max-[480px]:text-lg font-extrabold text-[#2ecc71]">Rp 300K</div>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white border border-[#e8e8e8] rounded-[14px] overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 max-md:flex max-md:flex-row max-md:gap-3.5 max-md:p-3.5 max-[480px]:gap-3 max-[480px]:p-3">
              <div className="p-3.5 pb-0 max-md:p-0">
                <img src="https://picsum.photos/400/250?2" alt="" className="w-full h-[210px] object-cover rounded-[10px] max-md:w-[140px] max-md:min-w-[140px] max-md:h-[140px] max-md:rounded-xl max-[480px]:w-[110px] max-[480px]:min-w-[110px] max-[480px]:h-[110px]" />
              </div>
              <div className="p-[18px] max-md:p-0 max-md:w-full">
                <h3 className="text-2xl max-md:text-lg max-[480px]:text-base leading-tight font-bold mb-3 max-md:mb-1.5 max-md:leading-[1.3]">Big 4 Auditor Financial Analyst</h3>
                <p className="text-sm max-md:text-[13px] max-[480px]:text-xs text-[#666] max-md:text-[#777] mb-[18px] max-md:mb-2.5 max-md:leading-[1.4]">
                  Mulai transformasi dengan instruktur profesional, harga yang
                  terjangkau, dan...
                </p>

                <div className="flex items-center gap-2.5 mb-[18px] max-md:mb-2.5">
                  <img src="https://i.pravatar.cc/40?img=2" alt="" className="w-[42px] h-[42px] rounded-full max-md:w-8 max-md:h-8 max-[480px]:w-7 max-[480px]:h-7" />
                  <div>
                    <h4 className="text-[15px] max-md:text-[13px] font-semibold">Jenna Ortega</h4>
                    <span className="text-[13px] max-md:text-[11px] text-[#777]">Senior Accountant di Gojek</span>
                  </div>
                </div>

                <div className="flex justify-between items-center max-md:flex-wrap max-md:gap-1">
                  <div className="text-sm max-md:text-[13px]">⭐⭐⭐ <span className="text-[#666] ml-1">3.5 (86)</span></div>
                  <div className="text-3xl max-md:text-[22px] max-[480px]:text-lg font-extrabold text-[#2ecc71]">Rp 300K</div>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white border border-[#e8e8e8] rounded-[14px] overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 max-md:flex max-md:flex-row max-md:gap-3.5 max-md:p-3.5 max-[480px]:gap-3 max-[480px]:p-3">
              <div className="p-3.5 pb-0 max-md:p-0">
                <img src="https://picsum.photos/400/250?3" alt="" className="w-full h-[210px] object-cover rounded-[10px] max-md:w-[140px] max-md:min-w-[140px] max-md:h-[140px] max-md:rounded-xl max-[480px]:w-[110px] max-[480px]:min-w-[110px] max-[480px]:h-[110px]" />
              </div>
              <div className="p-[18px] max-md:p-0 max-md:w-full">
                <h3 className="text-2xl max-md:text-lg max-[480px]:text-base leading-tight font-bold mb-3 max-md:mb-1.5 max-md:leading-[1.3]">Big 4 Auditor Financial Analyst</h3>
                <p className="text-sm max-md:text-[13px] max-[480px]:text-xs text-[#666] max-md:text-[#777] mb-[18px] max-md:mb-2.5 max-md:leading-[1.4]">
                  Mulai transformasi dengan instruktur profesional, harga yang
                  terjangkau, dan...
                </p>

                <div className="flex items-center gap-2.5 mb-[18px] max-md:mb-2.5">
                  <img src="https://i.pravatar.cc/40?img=3" alt="" className="w-[42px] h-[42px] rounded-full max-md:w-8 max-md:h-8 max-[480px]:w-7 max-[480px]:h-7" />
                  <div>
                    <h4 className="text-[15px] max-md:text-[13px] font-semibold">Jenna Ortega</h4>
                    <span className="text-[13px] max-md:text-[11px] text-[#777]">Senior Accountant di Gojek</span>
                  </div>
                </div>

                <div className="flex justify-between items-center max-md:flex-wrap max-md:gap-1">
                  <div className="text-sm max-md:text-[13px]">⭐⭐⭐ <span className="text-[#666] ml-1">3.5 (86)</span></div>
                  <div className="text-3xl max-md:text-[22px] max-[480px]:text-lg font-extrabold text-[#2ecc71]">Rp 300K</div>
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="bg-white border border-[#e8e8e8] rounded-[14px] overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 max-md:flex max-md:flex-row max-md:gap-3.5 max-md:p-3.5 max-[480px]:gap-3 max-[480px]:p-3">
              <div className="p-3.5 pb-0 max-md:p-0">
                <img src="https://picsum.photos/400/250?4" alt="" className="w-full h-[210px] object-cover rounded-[10px] max-md:w-[140px] max-md:min-w-[140px] max-md:h-[140px] max-md:rounded-xl max-[480px]:w-[110px] max-[480px]:min-w-[110px] max-[480px]:h-[110px]" />
              </div>
              <div className="p-[18px] max-md:p-0 max-md:w-full">
                <h3 className="text-2xl max-md:text-lg max-[480px]:text-base leading-tight font-bold mb-3 max-md:mb-1.5 max-md:leading-[1.3]">Big 4 Auditor Financial Analyst</h3>
                <p className="text-sm max-md:text-[13px] max-[480px]:text-xs text-[#666] max-md:text-[#777] mb-[18px] max-md:mb-2.5 max-md:leading-[1.4]">
                  Mulai transformasi dengan instruktur profesional, harga yang
                  terjangkau, dan...
                </p>

                <div className="flex items-center gap-2.5 mb-[18px] max-md:mb-2.5">
                  <img src="https://i.pravatar.cc/40?img=4" alt="" className="w-[42px] h-[42px] rounded-full max-md:w-8 max-md:h-8 max-[480px]:w-7 max-[480px]:h-7" />
                  <div>
                    <h4 className="text-[15px] max-md:text-[13px] font-semibold">Jenna Ortega</h4>
                    <span className="text-[13px] max-md:text-[11px] text-[#777]">Senior Accountant di Gojek</span>
                  </div>
                </div>

                <div className="flex justify-between items-center max-md:flex-wrap max-md:gap-1">
                  <div className="text-sm max-md:text-[13px]">⭐⭐⭐ <span className="text-[#666] ml-1">3.5 (86)</span></div>
                  <div className="text-3xl max-md:text-[22px] max-[480px]:text-lg font-extrabold text-[#2ecc71]">Rp 300K</div>
                </div>
              </div>
            </div>

            {/* CARD 5 */}
            <div className="bg-white border border-[#e8e8e8] rounded-[14px] overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 max-md:flex max-md:flex-row max-md:gap-3.5 max-md:p-3.5 max-[480px]:gap-3 max-[480px]:p-3">
              <div className="p-3.5 pb-0 max-md:p-0">
                <img src="https://picsum.photos/400/250?5" alt="" className="w-full h-[210px] object-cover rounded-[10px] max-md:w-[140px] max-md:min-w-[140px] max-md:h-[140px] max-md:rounded-xl max-[480px]:w-[110px] max-[480px]:min-w-[110px] max-[480px]:h-[110px]" />
              </div>
              <div className="p-[18px] max-md:p-0 max-md:w-full">
                <h3 className="text-2xl max-md:text-lg max-[480px]:text-base leading-tight font-bold mb-3 max-md:mb-1.5 max-md:leading-[1.3]">Big 4 Auditor Financial Analyst</h3>
                <p className="text-sm max-md:text-[13px] max-[480px]:text-xs text-[#666] max-md:text-[#777] mb-[18px] max-md:mb-2.5 max-md:leading-[1.4]">
                  Mulai transformasi dengan instruktur profesional, harga yang
                  terjangkau, dan...
                </p>

                <div className="flex items-center gap-2.5 mb-[18px] max-md:mb-2.5">
                  <img src="https://i.pravatar.cc/40?img=5" alt="" className="w-[42px] h-[42px] rounded-full max-md:w-8 max-md:h-8 max-[480px]:w-7 max-[480px]:h-7" />
                  <div>
                    <h4 className="text-[15px] max-md:text-[13px] font-semibold">Jenna Ortega</h4>
                    <span className="text-[13px] max-md:text-[11px] text-[#777]">Senior Accountant di Gojek</span>
                  </div>
                </div>

                <div className="flex justify-between items-center max-md:flex-wrap max-md:gap-1">
                  <div className="text-sm max-md:text-[13px]">⭐⭐⭐ <span className="text-[#666] ml-1">3.5 (86)</span></div>
                  <div className="text-3xl max-md:text-[22px] max-[480px]:text-lg font-extrabold text-[#2ecc71]">Rp 300K</div>
                </div>
              </div>
            </div>

            {/* CARD 6 */}
            <div className="bg-white border border-[#e8e8e8] rounded-[14px] overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 max-md:flex max-md:flex-row max-md:gap-3.5 max-md:p-3.5 max-[480px]:gap-3 max-[480px]:p-3">
              <div className="p-3.5 pb-0 max-md:p-0">
                <img src="https://picsum.photos/400/250?6" alt="" className="w-full h-[210px] object-cover rounded-[10px] max-md:w-[140px] max-md:min-w-[140px] max-md:h-[140px] max-md:rounded-xl max-[480px]:w-[110px] max-[480px]:min-w-[110px] max-[480px]:h-[110px]" />
              </div>
              <div className="p-[18px] max-md:p-0 max-md:w-full">
                <h3 className="text-2xl max-md:text-lg max-[480px]:text-base leading-tight font-bold mb-3 max-md:mb-1.5 max-md:leading-[1.3]">Big 4 Auditor Financial Analyst</h3>
                <p className="text-sm max-md:text-[13px] max-[480px]:text-xs text-[#666] max-md:text-[#777] mb-[18px] max-md:mb-2.5 max-md:leading-[1.4]">
                  Mulai transformasi dengan instruktur profesional, harga yang
                  terjangkau, dan...
                </p>

                <div className="flex items-center gap-2.5 mb-[18px] max-md:mb-2.5">
                  <img src="https://i.pravatar.cc/40?img=6" alt="" className="w-[42px] h-[42px] rounded-full max-md:w-8 max-md:h-8 max-[480px]:w-7 max-[480px]:h-7" />
                  <div>
                    <h4 className="text-[15px] max-md:text-[13px] font-semibold">Jenna Ortega</h4>
                    <span className="text-[13px] max-md:text-[11px] text-[#777]">Senior Accountant di Gojek</span>
                  </div>
                </div>

                <div className="flex justify-between items-center max-md:flex-wrap max-md:gap-1">
                  <div className="text-sm max-md:text-[13px]">⭐⭐⭐ <span className="text-[#666] ml-1">3.5 (86)</span></div>
                  <div className="text-3xl max-md:text-[22px] max-[480px]:text-lg font-extrabold text-[#2ecc71]">Rp 300K</div>
                </div>
              </div>
            </div>

            {/* CARD 7 */}
            <div className="bg-white border border-[#e8e8e8] rounded-[14px] overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 max-md:flex max-md:flex-row max-md:gap-3.5 max-md:p-3.5 max-[480px]:gap-3 max-[480px]:p-3">
              <div className="p-3.5 pb-0 max-md:p-0">
                <img src="https://picsum.photos/400/250?7" alt="" className="w-full h-[210px] object-cover rounded-[10px] max-md:w-[140px] max-md:min-w-[140px] max-md:h-[140px] max-md:rounded-xl max-[480px]:w-[110px] max-[480px]:min-w-[110px] max-[480px]:h-[110px]" />
              </div>
              <div className="p-[18px] max-md:p-0 max-md:w-full">
                <h3 className="text-2xl max-md:text-lg max-[480px]:text-base leading-tight font-bold mb-3 max-md:mb-1.5 max-md:leading-[1.3]">Big 4 Auditor Financial Analyst</h3>
                <p className="text-sm max-md:text-[13px] max-[480px]:text-xs text-[#666] max-md:text-[#777] mb-[18px] max-md:mb-2.5 max-md:leading-[1.4]">
                  Mulai transformasi dengan instruktur profesional, harga yang
                  terjangkau, dan...
                </p>

                <div className="flex items-center gap-2.5 mb-[18px] max-md:mb-2.5">
                  <img src="https://i.pravatar.cc/40?img=7" alt="" className="w-[42px] h-[42px] rounded-full max-md:w-8 max-md:h-8 max-[480px]:w-7 max-[480px]:h-7" />
                  <div>
                    <h4 className="text-[15px] max-md:text-[13px] font-semibold">Jenna Ortega</h4>
                    <span className="text-[13px] max-md:text-[11px] text-[#777]">Senior Accountant di Gojek</span>
                  </div>
                </div>

                <div className="flex justify-between items-center max-md:flex-wrap max-md:gap-1">
                  <div className="text-sm max-md:text-[13px]">⭐⭐⭐ <span className="text-[#666] ml-1">3.5 (86)</span></div>
                  <div className="text-3xl max-md:text-[22px] max-[480px]:text-lg font-extrabold text-[#2ecc71]">Rp 300K</div>
                </div>
              </div>
            </div>

            {/* CARD 8 */}
            <div className="bg-white border border-[#e8e8e8] rounded-[14px] overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 max-md:flex max-md:flex-row max-md:gap-3.5 max-md:p-3.5 max-[480px]:gap-3 max-[480px]:p-3">
              <div className="p-3.5 pb-0 max-md:p-0">
                <img src="https://picsum.photos/400/250?8" alt="" className="w-full h-[210px] object-cover rounded-[10px] max-md:w-[140px] max-md:min-w-[140px] max-md:h-[140px] max-md:rounded-xl max-[480px]:w-[110px] max-[480px]:min-w-[110px] max-[480px]:h-[110px]" />
              </div>
              <div className="p-[18px] max-md:p-0 max-md:w-full">
                <h3 className="text-2xl max-md:text-lg max-[480px]:text-base leading-tight font-bold mb-3 max-md:mb-1.5 max-md:leading-[1.3]">Big 4 Auditor Financial Analyst</h3>
                <p className="text-sm max-md:text-[13px] max-[480px]:text-xs text-[#666] max-md:text-[#777] mb-[18px] max-md:mb-2.5 max-md:leading-[1.4]">
                  Mulai transformasi dengan instruktur profesional, harga yang
                  terjangkau, dan...
                </p>

                <div className="flex items-center gap-2.5 mb-[18px] max-md:mb-2.5">
                  <img src="https://i.pravatar.cc/40?img=8" alt="" className="w-[42px] h-[42px] rounded-full max-md:w-8 max-md:h-8 max-[480px]:w-7 max-[480px]:h-7" />
                  <div>
                    <h4 className="text-[15px] max-md:text-[13px] font-semibold">Jenna Ortega</h4>
                    <span className="text-[13px] max-md:text-[11px] text-[#777]">Senior Accountant di Gojek</span>
                  </div>
                </div>

                <div className="flex justify-between items-center max-md:flex-wrap max-md:gap-1">
                  <div className="text-sm max-md:text-[13px]">⭐⭐⭐ <span className="text-[#666] ml-1">3.5 (86)</span></div>
                  <div className="text-3xl max-md:text-[22px] max-[480px]:text-lg font-extrabold text-[#2ecc71]">Rp 300K</div>
                </div>
              </div>
            </div>

            {/* CARD 9 */}
            <div className="bg-white border border-[#e8e8e8] rounded-[14px] overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 max-md:flex max-md:flex-row max-md:gap-3.5 max-md:p-3.5 max-[480px]:gap-3 max-[480px]:p-3">
              <div className="p-3.5 pb-0 max-md:p-0">
                <img src="https://picsum.photos/400/250?9" alt="" className="w-full h-[210px] object-cover rounded-[10px] max-md:w-[140px] max-md:min-w-[140px] max-md:h-[140px] max-md:rounded-xl max-[480px]:w-[110px] max-[480px]:min-w-[110px] max-[480px]:h-[110px]" />
              </div>
              <div className="p-[18px] max-md:p-0 max-md:w-full">
                <h3 className="text-2xl max-md:text-lg max-[480px]:text-base leading-tight font-bold mb-3 max-md:mb-1.5 max-md:leading-[1.3]">Big 4 Auditor Financial Analyst</h3>
                <p className="text-sm max-md:text-[13px] max-[480px]:text-xs text-[#666] max-md:text-[#777] mb-[18px] max-md:mb-2.5 max-md:leading-[1.4]">
                  Mulai transformasi dengan instruktur profesional, harga yang
                  terjangkau, dan...
                </p>

                <div className="flex items-center gap-2.5 mb-[18px] max-md:mb-2.5">
                  <img src="https://i.pravatar.cc/40?img=9" alt="" className="w-[42px] h-[42px] rounded-full max-md:w-8 max-md:h-8 max-[480px]:w-7 max-[480px]:h-7" />
                  <div>
                    <h4 className="text-[15px] max-md:text-[13px] font-semibold">Jenna Ortega</h4>
                    <span className="text-[13px] max-md:text-[11px] text-[#777]">Senior Accountant di Gojek</span>
                  </div>
                </div>

                <div className="flex justify-between items-center max-md:flex-wrap max-md:gap-1">
                  <div className="text-sm max-md:text-[13px]">⭐⭐⭐ <span className="text-[#666] ml-1">3.5 (86)</span></div>
                  <div className="text-3xl max-md:text-[22px] max-[480px]:text-lg font-extrabold text-[#2ecc71]">Rp 300K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-[50px] max-md:py-[35px]">
        <div className="max-w-[1200px] w-[90%] mx-auto">
          <div className="relative min-h-[340px] max-md:min-h-[420px] rounded-[18px] overflow-hidden bg-[url('https://picsum.photos/1400/800?newsletter')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-black/62"></div>

            <div className="relative z-[2] max-w-[760px] mx-auto text-center text-white px-5 py-[70px]">
              <span className="tracking-[2px] text-[13px]">NEWSLETTER</span>
              <h2 className="text-[46px] max-lg:text-4xl font-bold max-md:text-[34px] max-[480px]:text-3xl mt-2.5 mb-3.5">Mau Belajar Lebih Banyak?</h2>
              <p className="text-[#e7e7e7] mb-7">
                Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
                spesial dari program-program terbaik.
              </p>

              <form className="flex gap-3.5 justify-center max-md:flex-col">
                <input type="email" placeholder="Masukkan Emailmu" className="w-[420px] text-slate-900 bg-white max-md:w-full px-[18px] py-4 rounded-[10px] text-[15px] border-none outline-none" />
                <button type="submit" className="px-7 py-4 bg-[#f3b02e] text-white font-bold rounded-[10px] cursor-pointer max-md:w-full">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Beranda;
