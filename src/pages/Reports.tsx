import AppLayout from "@/components/AppLayout";
import StatCard from "@/components/StatCard";
import RevenueChart from "@/components/RevenueChart";
import SeasonalPricing from "@/components/SeasonalPricing";
import { IndianRupee, BedDouble, TrendingUp, Users } from "lucide-react";

const Reports = () => (
  <AppLayout>
    <div className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Reports</h1>
        <p className="text-muted-foreground mt-1">Revenue analytics and occupancy insights</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Monthly Revenue" value="₹3,10,000" change="+6.9% vs last month" changeType="positive" icon={IndianRupee} />
        <StatCard label="Avg. Occupancy" value="78%" change="+8% vs last month" changeType="positive" icon={BedDouble} />
        <StatCard label="RevPAR" value="₹4,306" change="Revenue per available room" changeType="neutral" icon={TrendingUp} />
        <StatCard label="Total Guests (Mar)" value={13} change="7 active, 6 checked-out" changeType="neutral" icon={Users} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <SeasonalPricing />
      </div>
    </div>
  </AppLayout>
);

export default Reports;
