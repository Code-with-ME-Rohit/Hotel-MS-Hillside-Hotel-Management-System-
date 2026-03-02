const statusColors: Record<string, string> = {
  Available: "bg-success/15 text-success",
  Occupied: "bg-info/15 text-info",
  Dirty: "bg-warning/15 text-warning",
  "Under Repair": "bg-destructive/15 text-destructive",
};

interface Room {
  id: number;
  number: string;
  type: string;
  floor: number;
  status: string;
  price: number;
}

const rooms: Room[] = [
  { id: 1, number: "101", type: "Standard", floor: 1, status: "Available", price: 2500 },
  { id: 2, number: "102", type: "Standard", floor: 1, status: "Occupied", price: 2500 },
  { id: 3, number: "201", type: "Deluxe", floor: 2, status: "Occupied", price: 4500 },
  { id: 4, number: "202", type: "Deluxe", floor: 2, status: "Dirty", price: 4500 },
  { id: 5, number: "301", type: "Suite", floor: 3, status: "Available", price: 8000 },
  { id: 6, number: "302", type: "Suite", floor: 3, status: "Under Repair", price: 8000 },
  { id: 7, number: "103", type: "Standard", floor: 1, status: "Available", price: 2500 },
  { id: 8, number: "203", type: "Deluxe", floor: 2, status: "Occupied", price: 4500 },
  { id: 9, number: "303", type: "Suite", floor: 3, status: "Occupied", price: 8000 },
  { id: 10, number: "104", type: "Standard", floor: 1, status: "Dirty", price: 2500 },
  { id: 11, number: "204", type: "Deluxe", floor: 2, status: "Available", price: 4500 },
  { id: 12, number: "304", type: "Suite", floor: 3, status: "Available", price: 8000 },
];

const RoomGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {rooms.map((room) => (
        <div
          key={room.id}
          className="bg-card border rounded-xl p-4 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="font-display text-lg font-bold">#{room.number}</span>
            <span
              className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${statusColors[room.status]}`}
            >
              {room.status}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{room.type}</p>
          <p className="text-sm text-muted-foreground">Floor {room.floor}</p>
          <p className="mt-2 font-semibold text-accent">₹{room.price.toLocaleString()}<span className="text-xs text-muted-foreground font-normal">/night</span></p>
        </div>
      ))}
    </div>
  );
};

export default RoomGrid;
