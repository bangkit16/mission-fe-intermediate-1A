import { ShoppingBag, User, Video } from "lucide-react";
import { useNavigate } from "react-router";
import Card from "./Card";

interface ProfileMenuCardProps {
  active?: "profile" | "kelas" | "pesanan";
}

export default function MenuCard({ active }: ProfileMenuCardProps) {
  const navigate = useNavigate();

  const menus = [
    {
      key: "profile",
      label: "Profil Saya",
      icon: User,
      path: "/profile",
    },
    {
      key: "kelas",
      label: "Kelas Saya",
      icon: Video,
      path: "/kelas",
    },
    {
      key: "pesanan",
      label: "Pesanan Saya",
      icon: ShoppingBag,
      path: "/pesanan",
    },
  ] as const;

  return (
    <Card className=" rounded-md border border-gray-100 bg-white px-2 py-4 flex flex-col space-y-3 shadow-sm">
      {menus.map((menu) => {
        const Icon = menu.icon;
        const isActive = active === menu.key;

        return (
          <button
            key={menu.key}
            type="button"
            onClick={() => navigate(menu.path)}
            className={`flex w-full items-center gap-3 rounded-md px-4 py-3 text-sm transition-colors ${
              isActive
                ? "border-1 border-amber-400 bg-amber-50 font-bold text-amber-400 hover:bg-amber-200"
                : "font-semibold text-gray-500 hover:bg-gray-50"
            }`}
          >
            <Icon
              className={`h-5 w-5 ${
                isActive ? "text-amber-500" : "text-gray-400"
              }`}
            />

            <span>{menu.label}</span>
          </button>
        );
      })}
    </Card>
  );
}
