// ================================================
// Data dummy metode pembayaran
// ================================================

import type { PaymentCategory } from "../components/PaymentMethodSelector";

export const paymentCategories: PaymentCategory[] = [
  {
    id: "transfer-bank",
    name: "Transfer Bank",
    methods: [
      {
        id: "bca",
        name: "Bank BCA",
        logo: "https://placehold.co/40x40?text=BCA",
      },
      {
        id: "bni",
        name: "Bank BNI",
        logo: "https://placehold.co/40x40?text=BNI",
      },
      {
        id: "bri",
        name: "Bank BRI",
        logo: "https://placehold.co/40x40?text=BRI",
      },
      {
        id: "mandiri",
        name: "Bank Mandiri",
        logo: "https://placehold.co/40x40?text=Mandiri",
      },
    ],
  },
  {
    id: "e-wallet",
    name: "E-Wallet",
    methods: [
      {
        id: "dana",
        name: "Dana",
        logo: "https://placehold.co/40x40?text=Dana",
      },
      { id: "ovo", name: "OVO", logo: "https://placehold.co/40x40?text=OVO" },
      {
        id: "linkaja",
        name: "LinkAja",
        logo: "https://placehold.co/40x40?text=LinkAja",
      },
      {
        id: "shopeepay",
        name: "Shopee Pay",
        logo: "https://placehold.co/40x40?text=SPay",
      },
    ],
  },
  {
    id: "credit-card",
    name: "Kartu Kredit/Debit",
    methods: [
      {
        id: "cc-group",
        name: "Mastercard / Visa / JCB",
        isLogosOnly: true,
        logos: [
          "https://placehold.co/50x30?text=Mastercard",
          "https://placehold.co/50x30?text=Visa",
          "https://placehold.co/50x30?text=JCB",
        ],
      },
    ],
  },
];
