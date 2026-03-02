import AppLayout from "@/components/AppLayout";
import StatCard from "@/components/StatCard";
import BookingsTable from "@/components/BookingsTable";
import RevenueChart from "@/components/RevenueChart";
import SeasonalPricing from "@/components/SeasonalPricing";
import { BedDouble, Users, IndianRupee, TrendingUp, CalendarCheck, AlertTriangle } from "lucide-react";

const Index = () => {
  return (
    <AppLayout>
      <div className="p-6 lg:p-8 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Hotel Management System — Solan, Himachal Pradesh</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          <StatCard label="Total Rooms" value={12} icon={BedDouble} />
          <StatCard label="Occupied" value={5} change="42% occupancy" changeType="neutral" icon={CalendarCheck} />
          <StatCard label="Available" value={4} icon={BedDouble} />
          <StatCard label="Today's Revenue" value="₹18,500" change="+12% vs yesterday" changeType="positive" icon={IndianRupee} />
          <StatCard label="Active Guests" value={7} change="+2 check-ins today" changeType="positive" icon={Users} />
          <StatCard label="Maintenance" value={1} change="Room #302" changeType="negative" icon={AlertTriangle} />
        </div>

        {/* Charts + Pricing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevenueChart />
          <SeasonalPricing />
        </div>

        {/* Recent Bookings */}
        <div>
          <h2 className="text-xl font-display font-bold mb-4">Recent Bookings</h2>
          <BookingsTable />
        </div>

        {/* Footer Credits */}
        <footer className="pt-6 border-t text-center text-sm text-muted-foreground">
          <p className="font-display font-semibold text-foreground">Hotel Management System — DBMS Project</p>
          <p className="mt-1">
            <span className="font-medium">Rohit Kumar</span> (GF202220522) &{" "}
            <span className="font-medium">Lakshay Sharma</span> (GF202216641)
          </p>
          <p className="text-xs mt-1">B.Tech CSE Cloud Computing — Shoolini University, Solan</p>
        </footer>
      </div>
    </AppLayout>
  );
};

export default Index;
