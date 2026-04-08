import DayCell from "./DayCell";

export default function DayGrid({ days }) {
  return (
    <div className="grid grid-cols-7 gap-2">
      {/* Week Labels */}
      {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
        <div key={i} className="text-center font-medium text-gray-500">
          {d}
        </div>
      ))}

      {/* Days */}
      {days.map((day, i) => (
        <DayCell key={i} day={day} />
      ))}
    </div>
  );
}