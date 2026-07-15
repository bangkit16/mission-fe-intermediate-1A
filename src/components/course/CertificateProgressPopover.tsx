import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

// 1. Komponen Modal/Popover (Berdasarkan gambar)
const CertificatePopoverCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-2xl w-96 relative border border-gray-100">
      {/* 
        Segitiga panah di atas modal (menghadap ke atas menuju pemicu).
        Posisinya disesuaikan di kanan atas sesuai dengan gambar asli.
      */}
      <div className="absolute top-[-8px] right-6 w-4 h-4 bg-white rotate-45 transform border-l border-t border-gray-100 z-0"></div>

      <div className="relative z-10">
        {/* Judul */}
        <h3 className="text-md font-bold text-black mb-2 leading-tight">
          25% Modul Telah Selesai
        </h3>

        {/* Garis Pembatas */}
        <div className="border-t border-gray-200 mb-2"></div>

        {/* Sub-deskripsi */}
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
          Selesaikan Semua Modul Untuk Mendapatkan Sertifikat
        </p>

        {/* Tombol Ambil Sertifikat */}
        <button
          type="button"
          disabled
          className="w-full bg-[#c0c0c0] text-[#717171] font-semibold py-3 px-6 rounded-xl text-md cursor-not-allowed transition-colors duration-200"
        >
          Ambil Sertifikat
        </button>
      </div>
    </div>
  );
};

// 2. Komponen Utama
const CertificateProgressPopover: React.FC = () => {
  return (
    <Popover className="relative inline-block">
      {({ open }) => (
        <>
          {/* Komponen Pemicu */}
          <Popover.Button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-1 -mx-1">
            <span
              className="font-semibold text-xs text-[#22c55e] flex items-center gap-1 cursor-pointer select-none"
              title="Klik untuk detail sertifikat"
            >
              10/12
              <span
                className={`text-[10px] text-gray-400 transition-transform duration-200 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </span>
          </Popover.Button>

          {/* Bagian Panel Modal - Diubah agar muncul ke bawah */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            {/* 
              PERUBAHAN DI SINI:
              - Mengubah 'bottom-full' menjadi 'top-full' (membuatnya berada di bawah pemicu).
              - Mengubah 'mb-3' (margin bottom) menjadi 'mt-3' (margin top).
              - Menggunakan 'right-0' agar posisi modal rata kanan dengan teks pemicu, 
                sehingga pas dengan posisi panah segitiga yang berada di kanan atas card.
            */}
            <Popover.Panel className="absolute z-50 top-full right-0 mt-3">
              <CertificatePopoverCard />
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default CertificateProgressPopover;
