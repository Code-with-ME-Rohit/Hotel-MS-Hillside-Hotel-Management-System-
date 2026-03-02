import AppLayout from "@/components/AppLayout";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";

const guests = [
  { id: "G001", name: "Amit Verma", phone: "+91 98765 43210", email: "amit.v@email.com", idType: "Aadhaar", visits: 3, status: "Checked-In" },
  { id: "G002", name: "Priya Sharma", phone: "+91 87654 32109", email: "priya.s@email.com", idType: "Passport", visits: 1, status: "Checked-In" },
  { id: "G003", name: "John Smith", phone: "+1 555 0142", email: "john.smith@email.com", idType: "Passport", visits: 2, status: "Reserved" },
  { id: "G004", name: "Neha Gupta", phone: "+91 76543 21098", email: "neha.g@email.com", idType: "Aadhaar", visits: 5, status: "Checked-Out" },
  { id: "G005", name: "Rahul Thakur", phone: "+91 65432 10987", email: "rahul.t@email.com", idType: "Driving License", visits: 1, status: "Reserved" },
  { id: "G006", name: "Sarah Johnson", phone: "+1 555 0198", email: "sarah.j@email.com", idType: "Passport", visits: 1, status: "Reserved" },
  { id: "G007", name: "Vikram Singh", phone: "+91 54321 09876", email: "vikram.s@email.com", idType: "Aadhaar", visits: 8, status: "Checked-Out" },
];

const statusStyles: Record<string, string> = {
  "Checked-In": "bg-success/15 text-success",
  "Checked-Out": "bg-muted text-muted-foreground",
  Reserved: "bg-info/15 text-info",
};

const Guests = () => (
  <AppLayout>
    <div className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Guests</h1>
        <p className="text-muted-foreground mt-1">All registered guests and their details</p>
      </div>
      <div className="bg-card border rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold">ID</TableHead>
              <TableHead className="font-semibold">Name</TableHead>
              <TableHead className="font-semibold">Phone</TableHead>
              <TableHead className="font-semibold">Email</TableHead>
              <TableHead className="font-semibold">ID Type</TableHead>
              <TableHead className="font-semibold text-center">Visits</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {guests.map((g) => (
              <TableRow key={g.id} className="hover:bg-muted/30 transition-colors">
                <TableCell className="font-mono text-sm">{g.id}</TableCell>
                <TableCell className="font-medium">{g.name}</TableCell>
                <TableCell className="text-muted-foreground">{g.phone}</TableCell>
                <TableCell className="text-muted-foreground">{g.email}</TableCell>
                <TableCell>{g.idType}</TableCell>
                <TableCell className="text-center">{g.visits}</TableCell>
                <TableCell>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusStyles[g.status]}`}>{g.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  </AppLayout>
);

export default Guests;
