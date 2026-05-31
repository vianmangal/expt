import AnalyticsSidebar from "@/components/analytics/asidebar";
import AnalyticsTopbar from "@/components/analytics/atopbar";
import SummaryCard from "@/components/analytics/summary";
import CategoryChart from "@/components/analytics/catchart";
import VarianceChart from "@/components/analytics/vchart";
import Heatmap from "@/components/analytics/heatmap";
import AnomalyDetection from "@/components/analytics/adetect";
import AICore from "@/components/analytics/aicore";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#131313] text-white">
      <AnalyticsSidebar />

      <main className="ml-[240px]">
        <AnalyticsTopbar />

        <div className="pt-28 px-16 pb-12 space-y-8">
          <div className="grid md:grid-cols-4 gap-4">
            <SummaryCard
              title="TOTAL_SPENT_NOV"
              value="$4,281.50"
              change="-12%"
            />

            <SummaryCard
              title="AVG_DAILY_SPEND"
              value="$142.71"
              change="STABLE"
            />

            <SummaryCard
              title="TOP_CATEGORY"
              value="LIFESTYLE"
              change="32%"
            />

            <SummaryCard
              title="SAVINGS_RATE"
              value="24.8%"
              change="+2.4%"
            />
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <CategoryChart />
            </div>

            <div className="col-span-12 lg:col-span-7">
              <VarianceChart />
            </div>
          </div>

          <Heatmap />

          <div className="grid md:grid-cols-2 gap-8">
            <AnomalyDetection />
            <AICore />
          </div>
        </div>
      </main>
    </div>
  );
}