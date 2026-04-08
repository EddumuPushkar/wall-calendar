export default function Header({ currentDate, setCurrentDate }) {
  const changeMonth = (offset) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + offset,
      1
    );
    setCurrentDate(newDate);
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <button
        onClick={() => changeMonth(-1)}
        className="px-3 py-1 border rounded hover:bg-gray-100"
      >
        ←
      </button>

      <h2 className="text-lg font-semibold">
        {currentDate.toLocaleString("default", { month: "long" })}{" "}
        {currentDate.getFullYear()}
      </h2>

      <button
        onClick={() => changeMonth(1)}
        className="px-3 py-1 border rounded hover:bg-gray-100"
      >
        →
      </button>
    </div>
  );
}