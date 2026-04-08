import useCalendarStore from "../../store/useCalendarStore";

export default function DayCell({ day }) {
  const { selectedStart, selectedEnd, setStart, setEnd } = useCalendarStore();

  if (!day) return <div />;

  const dateStr = day.toDateString();
  const isStart = selectedStart?.toDateString() === dateStr;
  const isEnd = selectedEnd?.toDateString() === dateStr;
  const isBetween = selectedStart && selectedEnd && day > selectedStart && day < selectedEnd;

  const handleClick = () => {
    if (!selectedStart || (selectedStart && selectedEnd)) {
      setStart(day);
    } else {
      setEnd(day);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`h-10 flex items-center justify-center rounded cursor-pointer
        ${isStart ? "bg-blue-500 text-white" : ""}
        ${isEnd ? "bg-green-500 text-white" : ""}
        ${isBetween ? "bg-blue-200" : ""}
        hover:bg-gray-200
      `}
    >
      {day.getDate()}
    </div>
  );
}