import { ReactNode } from "react";
import {
  LayoutDashboard,
  BedDouble,
  CalendarCheck,
  Users,
  Receipt,
  BarChart3,
  Settings,
  Hotel,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/" },
  { label: "Rooms", icon: BedDouble, to: "/rooms" },
  { label: "Bookings", icon: CalendarCheck, to: "/bookings" },
  { label: "Guests", icon: Users, to: "/guests" },
  { label: "Billing", icon: Receipt, to: "/billing" },
  { label: "Reports", icon: BarChart3, to: "/reports" },
  { label: "Settings", icon: Settings, to: "/settings" },
];

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar text-sidebar-foreground flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-3 border-b border-sidebar-border">
          <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
            <Hotel className="w-5 h-5 text-gold-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-display font-bold text-primary-foreground tracking-tight">
              HotelMS
            </h1>
            <p className="text-xs text-sidebar-foreground/60">Solan, Himachal</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-primary shadow-gold"
                    : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`
              }
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <div className="text-[10px] text-sidebar-foreground/40 text-center leading-relaxed">
            <p className="font-medium text-sidebar-foreground/60 mb-1">Project Owners</p>
            <p>Rohit Kumar (GF202220522)</p>
            <p>Lakshay Sharma (GF202216641)</p>
            <p className="mt-1 text-sidebar-foreground/30">Shoolini University</p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
