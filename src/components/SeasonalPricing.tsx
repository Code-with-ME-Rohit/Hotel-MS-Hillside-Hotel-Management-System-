const seasons = [
  { season: "Peak (Jun–Jul)", multiplier: "1.8x", standard: 4500, deluxe: 8100, suite: 14400, note: "Tourist rush in Solan" },
  { season: "High (Dec–Jan)", multiplier: "1.5x", standard: 3750, deluxe: 6750, suite: 12000, note: "Winter holidays" },
  { season: "Regular", multiplier: "1.0x", standard: 2500, deluxe: 4500, suite: 8000, note: "Base pricing" },
  { season: "Off-Peak (Aug–Sep)", multiplier: "0.8x", standard: 2000, deluxe: 3600, suite: 6400, note: "Monsoon season" },
];

const SeasonalPricing = () => {
  return (
    <div className="bg-card border rounded-xl overflow-hidden">
      <div className="p-5 border-b">
        <h3 className="font-display text-lg font-bold">Seasonal Pricing Matrix</h3>
        <p className="text-sm text-muted-foreground mt-1">Dynamic pricing based on Himachal tourism seasons</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="text-left p-3 font-semibold">Season</th>
              <th className="text-center p-3 font-semibold">Multiplier</th>
              <th className="text-right p-3 font-semibold">Standard</th>
              <th className="text-right p-3 font-semibold">Deluxe</th>
              <th className="text-right p-3 font-semibold">Suite</th>
              <th className="text-left p-3 font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {seasons.map((s) => (
              <tr key={s.season} className="border-t hover:bg-muted/30 transition-colors">
                <td className="p-3 font-medium">{s.season}</td>
                <td className="p-3 text-center">
                  <span className="bg-accent/15 text-accent font-bold px-2 py-0.5 rounded-full text-xs">
                    {s.multiplier}
                  </span>
                </td>
                <td className="p-3 text-right">₹{s.standard.toLocaleString()}</td>
                <td className="p-3 text-right">₹{s.deluxe.toLocaleString()}</td>
                <td className="p-3 text-right">₹{s.suite.toLocaleString()}</td>
                <td className="p-3 text-muted-foreground">{s.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeasonalPricing;
