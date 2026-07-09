import React, { useState } from "react";
import { useNavigate } from "react-router";
import SectionContainer from "../components/common/SectionContainer";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import CheckoutCard from "../features/produk/components/CheckoutCard";
import Card from "../components/common/Card";
import CheckoutProgress from "../components/common/CheckoutProgress";
import { VirtualAccountInfo } from "../features/pembayaran/components/VirtualAccountInfo";
import { PaymentSummary } from "../features/pembayaran/components/PaymentSummary";
import {
  PaymentGuide,
  type GuideEntry,
} from "../features/pembayaran/components/PaymentGuide";

// Data panduan pembayaran
const guideEntries: GuideEntry[] = [
  {
    id: "atm-bca",
    title: "ATM BCA",
    steps: [
      "Masukkan kartu ATM dan PIN BCA Anda",
      'Di menu utama, pilih "Transaksi Lainnya". Pilih "Transfer". Pilih "Ke BCA Virtual Account"',
      "Masukkan nomor Virtual Account",
      'Pastikan data Virtual Account Anda benar, kemudian masukkan angka yang perlu Anda bayarkan, kemudian pilih "Benar"',
      'Cek dan perhatikan konfirmasi pembayaran dari layar ATM, jika sudah benar pilih "Ya", atau pilih "Tidak" jika data di layar masih salah',
      'Transaksi Anda sudah selesai. Pilih "Tidak" untuk tidak melanjutkan transaksi lain',
    ],
  },
  {
    id: "mobile-bca",
    title: "Mobile Banking BCA",
    steps: [
      "Buka Aplikasi BCA Mobile",
      'Pilih "m-BCA", kemudian pilih "m-Transfer"',
      'Pilih "BCA Virtual Account"',
      'Masukkan nomor Virtual Account, lalu pilih "OK"',
      'Klik tombol "Send" yang berada di sudut kanan atas aplikasi untuk melakukan transfer',
      'Klik "OK" untuk melanjutkan pembayaran',
      "Masukkan PIN Anda untuk meng-otorisasi transaksi",
      "Transaksi Anda telah selesai",
    ],
  },
  {
    id: "internet-bca",
    title: "Internet Banking BCA",
    steps: [
      "Login ke KlikBCA Individual",
      'Pilih "Transfer", kemudian pilih "Transfer ke BCA Virtual Account"',
      "Masukkan nomor Virtual Account",
      'Pilih "Lanjutkan" untuk melanjutkan pembayaran',
      'Masukkan "RESPON KEYBCA APPLI 1" yang muncul pada Token BCA Anda, lalu klik tombol "Kirim"',
      "Pembayaran telah selesai",
    ],
  },
];

function Pembayaran() {
  const navigate = useNavigate();
  // State untuk melacak accordion panduan cara bayar mana saja yang terbuka
  const [openGuides, setOpenGuides] = useState<string[]>([
    "atm-bca",
    "mobile-bca",
    "internet-bca",
  ]);

  const toggleGuide = (id: string) => {
    setOpenGuides((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <LayoutBeranda isCheckoutProgress={false} isCheckoutTimer={true}>
      <SectionContainer>
        <CheckoutProgress currentStep={2} />
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-start mt-5">
          <main className="flex-1 w-full space-y-6">
            {/* CARD 1: METODE PEMBAYARAN & RINGKASAN PESANAN */}
            <Card className="p-4 md:p-6 bg-white">
              <h2 className="text-base md:text-lg font-bold text-gray-900 mb-4">
                Metode Pembayaran
              </h2>

              <VirtualAccountInfo
                bankLogoUrl="https://placehold.co/120x40?text=BCA"
                bankName="BCA"
                virtualAccountDisplay="11739 081234567890"
                virtualAccountFull="11739081234567890"
              />

              <PaymentSummary
                productName="Video Learning: Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager."
                productPrice={767500}
                adminFee={7000}
                total={774500}
                onChangeMethod={() => navigate("/produk/belajar-menyenangkan/ganti-metode")}
                onPayNow={() => navigate("/produk/belajar-menyenangkan/pembayaran-selesai")}
              />
            </Card>

            {/* CARD 2: TATA CARA PEMBAYARAN */}
            <PaymentGuide
              guides={guideEntries}
              openGuideIds={openGuides}
              onToggleGuide={toggleGuide}
            />
          </main>
          <CheckoutCard />
        </div>
      </SectionContainer>
    </LayoutBeranda>
  );
}

export default Pembayaran;
