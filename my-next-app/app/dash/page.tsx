import Sidebar from "@/components/dashboard/sidebar";
import Topbar from "@/components/dashboard/topbar";
import StatCard from "@/components/dashboard/stats";
import SpendingChart from "@/components/dashboard/spendingcharts";
import TransactionList from "@/components/dashboard/transactionlist";
import FloatingActionButton from "@/components/dashboard/fbutton";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#131313] text-white">
      <Sidebar />

      <main className="ml-[260px]">
        <Topbar />

        <div className="p-6 space-y-6">
          <section>
            <h1 className="text-3xl font-bold">
              Good morning, Alex
            </h1>

            <p className="text-zinc-400">
              Here is whats happening with your finances today.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <StatCard
              title="Total Balance"
              value="$24,562.00"
              trend="+2.4%"
            />

            <StatCard
              title="Monthly Spend"
              value="$3,120.45"
              trend="-12.5%"
            />

            <StatCard
              title="Income"
              value="$8,450.00"
              trend="+8.1%"
            />

            <StatCard
              title="Savings Rate"
              value="34.2%"
              trend="0.5%"
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <SpendingChart />
            </div>

            <TransactionList />
          </div>
        </div>
      </main>

      <FloatingActionButton />
    </div>
  );
}