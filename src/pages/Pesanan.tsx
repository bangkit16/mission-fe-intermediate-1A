import { useEffect, useState } from "react";
import Pagination from "../components/common/Pagination";
import SectionContainer from "../components/common/SectionContainer";
import LayoutBeranda from "../components/layout/LayoutBeranda";
import Card from "../components/common/Card";
import { PesananSidebar } from "../features/pesanan/components/PesananSidebar";
import { PesananFilterTabs } from "../features/pesanan/components/PesananFilterTabs";
import { PesananSearchBar } from "../features/pesanan/components/PesananSearchBar";
import { OrderCard } from "../features/pesanan/components/OrderCard";
import { getAllOrders, type Order } from "../services/api/ordersService";

const tabs = ["Semua Pesanan", "Menunggu", "Berhasil", "Gagal"];

function Pesanan() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeTab, setActiveTab] = useState("Semua Pesanan");

  useEffect(() => {
    getAllOrders().then(setOrders);
  }, []);

  const filteredOrders = activeTab === "Semua Pesanan"
    ? orders
    : orders.filter((o) => o.status.toLowerCase().includes(activeTab.toLowerCase()));

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Berhasil":
        return "bg-green-100 text-green-400 ";
      case "Gagal":
        return "bg-red-100 text-red-400 ";
      case "Belum Bayar":
        return "bg-amber-100 text-amber-400 ";
      default:
        return "bg-gray-100 text-gray-400";
    }
  };

  return (
    <LayoutBeranda>
      <SectionContainer>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <PesananSidebar />

          <main className="flex-1 w-full space-y-5">
            <Card className="md:p-3 p-1 bg-white border border-gray-100 rounded-2xl shadow-sm space-y-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center xl:justify-between">
                <PesananFilterTabs
                  tabs={tabs}
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                />
                <PesananSearchBar />
              </div>

              <div className="space-y-4 pt-5">
                {filteredOrders.map((order) => (
                  <OrderCard
                    key={order.id}
                    order={order}
                    getStatusStyle={getStatusStyle}
                  />
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <Pagination
                  currentPage={1}
                  totalPages={6}
                  onPageChange={() => {}}
                />
              </div>
            </Card>
          </main>
        </div>
      </SectionContainer>
    </LayoutBeranda>
  );
}

export default Pesanan;
