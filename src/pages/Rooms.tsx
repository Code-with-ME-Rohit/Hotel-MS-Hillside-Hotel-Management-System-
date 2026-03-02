import AppLayout from "@/components/AppLayout";
import RoomGrid from "@/components/RoomGrid";

const Rooms = () => {
  return (
    <AppLayout>
      <div className="p-6 lg:p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Rooms</h1>
          <p className="text-muted-foreground mt-1">Manage all hotel rooms and their current status</p>
        </div>
        <RoomGrid />
      </div>
    </AppLayout>
  );
};

export default Rooms;
