import React from "react";
// Import ikon yang sesuai dari lucide-react
import { FileText, Video, File, Award, PenSquare, Globe } from "lucide-react";
import { Link } from "react-router";

function CheckoutCard({
  isCheckoutButtonDisabled = true,
  checkoutLink,
}: {
  isCheckoutButtonDisabled?: boolean;
  checkoutLink?: string;
}) {
  return (
    <aside className="w-full lg:w-[366px] flex flex-col p-6 gap-5 bg-white border border-[rgba(58,53,65,0.12)] rounded-[14px] lg:sticky lg:top-24 shrink-0 shadow-sm">
      {/* Title / Headline */}
      <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
        Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
      </h3>

      {/* Price Section */}
      <div className="flex items-center justify-between gap-2 mt-1">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-[#22C55E]">Rp 250K</span>
          <span className="text-base text-gray-400 line-through">Rp 500K</span>s
        </div>
        <span className="bg-[#FBBF24] text-white text-xs font-semibold px-2.5 py-1 rounded-md">
          Diskon 50%
        </span>
      </div>

      {/* Promo Info */}
      <p className="text-sm font-medium text-[#3B82F6]">
        Penawaran spesial tersisa 2 hari lagi!
      </p>

      {/* CTA Button */}

      {checkoutLink ? (
        <Link
          to={checkoutLink}
          className="block w-full bg-[#22C55E] hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl transition-colors duration-200 text-center text-base no-underline"
        >
          Beli Sekarang
        </Link>
      ) : null}

      {/* Features List Section */}
      <div className="flex flex-col gap-3 mt-2">
        <h4 className="text-sm md:text-base font-bold text-gray-900">
          Kelas Ini Sudah Termasuk
        </h4>

        <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-1">
          <div className="flex items-center gap-2.5 text-gray-500 text-sm md:text-base">
            <FileText className="w-5 h-5 text-gray-600 shrink-0" />
            <span className="truncate">Ujian Akhir</span>
          </div>

          <div className="flex items-center gap-2.5 text-gray-500 text-sm md:text-base">
            <Video className="w-5 h-5 text-gray-600 shrink-0" />
            <span className="truncate">49 Video</span>
          </div>

          <div className="flex items-center gap-2.5 text-gray-500 text-sm md:text-base">
            <File className="w-5 h-5 text-gray-600 shrink-0" />
            <span className="truncate">7 Dokumen</span>
          </div>

          <div className="flex items-center gap-2.5 text-gray-500 text-sm md:text-base">
            <Award className="w-5 h-5 text-gray-600 shrink-0" />
            <span className="truncate">Sertifikat</span>
          </div>

          <div className="flex items-center gap-2.5 text-gray-500 text-sm md:text-base col-span-2">
            <PenSquare className="w-5 h-5 text-gray-600 shrink-0" />
            <span className="truncate">Pretest</span>
          </div>
        </div>
      </div>

      {/* Language Section */}
      <div className="flex flex-col gap-2 mt-1">
        <h4 className="text-sm md:text-base font-bold text-gray-900">
          Bahasa Pengantar
        </h4>
        <div className="flex items-center gap-2.5 text-gray-500 text-sm md:text-base">
          <Globe className="w-5 h-5 text-gray-600 shrink-0" />
          <span>Bahasa Indonesia</span>
        </div>
      </div>
    </aside>
  );
}

export default CheckoutCard;
