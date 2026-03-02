import AppLayout from "@/components/AppLayout";
import { Hotel, Database, Shield, Cloud } from "lucide-react";

const sections = [
  {
    icon: Hotel,
    title: "Hotel Information",
    items: [
      { label: "Hotel Name", value: "HotelMS — Solan" },
      { label: "Location", value: "Solan, Himachal Pradesh, India" },
      { label: "Total Rooms", value: "12" },
      { label: "Room Types", value: "Standard, Deluxe, Suite" },
    ],
  },
  {
    icon: Database,
    title: "Database Configuration",
    items: [
      { label: "DBMS", value: "PostgreSQL / MySQL" },
      { label: "Normalization", value: "3NF (Third Normal Form)" },
      { label: "Triggers", value: "Auto room status on check-out" },
      { label: "Stored Procedures", value: "Automated billing generation" },
    ],
  },
  {
    icon: Shield,
    title: "Security (RBAC)",
    items: [
      { label: "Admin Role", value: "Full access — revenue, settings" },
      { label: "Manager Role", value: "Reports, bookings, guests" },
      { label: "Staff Role", value: "Check-in / check-out only" },
      { label: "Auth Method", value: "Role-Based Access Control" },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    items: [
      { label: "Hosting", value: "AWS RDS / Google Cloud SQL" },
      { label: "Containerization", value: "Docker-ready" },
      { label: "Tech Stack", value: "React + TypeScript + Tailwind" },
      { label: "Architecture", value: "Cloud-Native SPA" },
    ],
  },
];

const Settings = () => (
  <AppLayout>
    <div className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-1">System configuration and project details</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((s) => (
          <div key={s.title} className="bg-card border rounded-xl p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center">
                <s.icon className="w-4 h-4 text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold">{s.title}</h3>
            </div>
            <dl className="space-y-3">
              {s.items.map((item) => (
                <div key={item.label} className="flex justify-between text-sm">
                  <dt className="text-muted-foreground">{item.label}</dt>
                  <dd className="font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  </AppLayout>
);

export default Settings;
