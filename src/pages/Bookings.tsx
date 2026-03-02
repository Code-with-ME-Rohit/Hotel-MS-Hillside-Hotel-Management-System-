import AppLayout from "@/components/AppLayout";
import BookingsTable from "@/components/BookingsTable";

const Bookings = () => {
  return (
    <AppLayout>
      <div className="p-6 lg:p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Bookings</h1>
          <p className="text-muted-foreground mt-1">View and manage all guest reservations</p>
        </div>
        <BookingsTable />
      </div>
    </AppLayout>
  );
};

export default Bookings;
