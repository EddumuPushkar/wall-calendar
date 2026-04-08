import { useEffect, useState } from "react";
import useCalendarStore from "../../store/useCalendarStore";

export default function NotesPanel({ currentDate }) {
  const { addMonthNote, loadMonthNote, notes } = useCalendarStore();
  const monthKey = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`; // e.g., "2026-4"

  const [text, setText] = useState("");

  // Load existing note when month changes
  useEffect(() => {
    const savedText = loadMonthNote(monthKey);
    setText(savedText);
  }, [currentDate]); // re-run when month changes

  const handleSave = () => {
    addMonthNote(monthKey, text);
  };

  return (
    <div className="flex flex-col border rounded-2xl p-4 h-[200px]">
      <h2 className="font-semibold mb-2">Notes for {currentDate.toLocaleString("default", { month: "long" })}</h2>

      <textarea
        className=" w-full border rounded p-2 mb-2 resize-none h-[100px]"
        rows="6"
        placeholder="Write your notes for this month..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleSave}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Save Note
      </button>
    </div>
  );
}