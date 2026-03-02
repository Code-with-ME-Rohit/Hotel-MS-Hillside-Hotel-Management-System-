import AppLayout from "@/components/AppLayout";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";

const invoices = [
  { id: "INV-001", guest: "Amit Verma", room: "102", nights: 3, roomCharge: 7500, services: 1200, tax: 1305, total: 10005, status: "Paid" },
  { id: "INV-002", guest: "Priya Sharma", room: "201", nights: 3, roomCharge: 13500, services: 2500, tax: 2400, total: 18400, status: "Pending" },
  { id: "INV-003", guest: "Neha Gupta", room: "203", nights: 2, roomCharge: 9000, services: 800, tax: 1470, total: 11270, status: "Paid" },
  { id: "INV-004", guest: "John Smith", room: "303", nights: 4, roomCharge: 32000, services: 5000, tax: 5550, total: 42550, status: "Pending" },
  { id: "INV-005", guest: "Vikram Singh", room: "101", nights: 2, roomCharge: 5000, services: 300, tax: 795, total: 6095, status: "Paid" },
];

const statusStyles: Record<string, string> = {
  Paid: "bg-success/15 text-success",
  Pending: "bg-warning/15 text-warning",
  Overdue: "bg-destructive/15 text-destructive",
};

const Billing = () => (
  <AppLayout>
    <div className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Billing</h1>
        <p className="text-muted-foreground mt-1">Invoice management and payment tracking</p>
      </div>
      <div className="bg-card border rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold">Invoice</TableHead>
              <TableHead className="font-semibold">Guest</TableHead>
              <TableHead className="font-semibold">Room</TableHead>
              <TableHead className="font-semibold text-center">Nights</TableHead>
              <TableHead className="font-semibold text-right">Room Charge</TableHead>
              <TableHead className="font-semibold text-right">Services</TableHead>
              <TableHead className="font-semibold text-right">Tax (15%)</TableHead>
              <TableHead className="font-semibold text-right">Total</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((inv) => (
              <TableRow key={inv.id} className="hover:bg-muted/30 transition-colors">
                <TableCell className="font-mono text-sm">{inv.id}</TableCell>
                <TableCell className="font-medium">{inv.guest}</TableCell>
                <TableCell>#{inv.room}</TableCell>
                <TableCell className="text-center">{inv.nights}</TableCell>
                <TableCell className="text-right">₹{inv.roomCharge.toLocaleString()}</TableCell>
                <TableCell className="text-right">₹{inv.services.toLocaleString()}</TableCell>
                <TableCell className="text-right">₹{inv.tax.toLocaleString()}</TableCell>
                <TableCell className="text-right font-semibold">₹{inv.total.toLocaleString()}</TableCell>
                <TableCell>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusStyles[inv.status]}`}>{inv.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  </AppLayout>
);

export default Billing;
