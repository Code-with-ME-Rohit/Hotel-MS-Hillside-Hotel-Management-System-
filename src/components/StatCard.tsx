import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
}

const StatCard = ({ label, value, change, changeType = "neutral", icon: Icon }: StatCardProps) => {
  const changeColor =
    changeType === "positive"
      ? "text-success"
      : changeType === "negative"
      ? "text-destructive"
      : "text-muted-foreground";

  return (
    <div className="bg-card rounded-xl border p-5 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground font-medium">{label}</p>
          <p className="text-2xl font-display font-bold mt-1">{value}</p>
          {change && (
            <p className={`text-xs mt-1 font-medium ${changeColor}`}>{change}</p>
          )}
        </div>
        <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-accent" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
