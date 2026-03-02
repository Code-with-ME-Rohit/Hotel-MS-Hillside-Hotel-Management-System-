import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const bookings = [
  { id: "BK001", guest: "Amit Verma", room: "102", checkIn: "2026-03-01", checkOut: "2026-03-04", status: "Checked-In", amount: 7500 },
  { id: "BK002", guest: "Priya Sharma", room: "201", checkIn: "2026-02-28", checkOut: "2026-03-03", status: "Checked-In", amount: 13500 },
  { id: "BK003", guest: "John Smith", room: "303", checkIn: "2026-03-02", checkOut: "2026-03-06", status: "Confirmed", amount: 32000 },
  { id: "BK004", guest: "Neha Gupta", room: "203", checkIn: "2026-02-27", checkOut: "2026-03-01", status: "Checked-Out", amount: 9000 },
  { id: "BK005", guest: "Rahul Thakur", room: "101", checkIn: "2026-03-05", checkOut: "2026-03-08", status: "Confirmed", amount: 7500 },
  { id: "BK006", guest: "Sarah Johnson", room: "301", checkIn: "2026-03-03", checkOut: "2026-03-07", status: "Confirmed", amount: 32000 },
];

const statusStyles: Record<string, string> = {
  "Checked-In": "bg-success/15 text-success",
  "Checked-Out": "bg-muted text-muted-foreground",
  Confirmed: "bg-info/15 text-info",
  Cancelled: "bg-destructive/15 text-destructive",
};

const BookingsTable = () => {
  return (
    <div className="bg-card border rounded-xl overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">Booking ID</TableHead>
            <TableHead className="font-semibold">Guest</TableHead>
            <TableHead className="font-semibold">Room</TableHead>
            <TableHead className="font-semibold">Check-In</TableHead>
            <TableHead className="font-semibold">Check-Out</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="font-semibold text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((b) => (
            <TableRow key={b.id} className="hover:bg-muted/30 transition-colors">
              <TableCell className="font-mono text-sm">{b.id}</TableCell>
              <TableCell className="font-medium">{b.guest}</TableCell>
              <TableCell>#{b.room}</TableCell>
              <TableCell className="text-muted-foreground">{b.checkIn}</TableCell>
              <TableCell className="text-muted-foreground">{b.checkOut}</TableCell>
              <TableCell>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusStyles[b.status]}`}>
                  {b.status}
                </span>
              </TableCell>
              <TableCell className="text-right font-semibold">₹{b.amount.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BookingsTable;
