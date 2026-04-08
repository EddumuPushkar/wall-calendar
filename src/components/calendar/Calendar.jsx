import { useEffect } from "react";
import { getCalendarDays } from "../../utils/dateUtils";
import Header from "./Header";
import DayGrid from "./DayGrid";
import useCalendarStore from "../../store/useCalendarStore";

export default function Calendar({ currentDate, setCurrentDate }) {
  const {
    selectedStart,
    selectedEnd,
    setStart,
    setEnd,
    loadRange,
    clearRange,
  } = useCalendarStore();

  const monthKey = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`;

  // Load existing start/end for this month safely
  useEffect(() => {
    const { start, end } = loadRange(monthKey);
    if (start) setStart(start);
    else setStart(null);

    if (end) setEnd(end);
    else setEnd(null);
  }, [currentDate]);

  const days = getCalendarDays(currentDate);

  // Determine status text
  let statusText = "Select start date";
  if (selectedStart && !selectedEnd) {
    statusText = "Select end date";
  } else if (selectedStart && selectedEnd) {
    statusText = "Date range selected";
  }

  return (
    <div className="border rounded-2xl p-4 ">
      {/* Header */}
      <Header currentDate={currentDate} setCurrentDate={setCurrentDate} />

      {/* Status Text */}
      <div className="mb-2 font-semibold text-gray-700">{statusText}</div>

      {/* Calendar Grid */}
      <DayGrid days={days} />

      {/* Clear Button */}
      <div className="mt-4 text-right">
        <button
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          onClick={() => clearRange(monthKey)}
        >
          Clear Selection
        </button>
      </div>
    </div>
  );
}