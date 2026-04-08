import { useState } from "react";
import Calendar from "./components/calendar/Calendar";
import ImagePanel from "./components/layout/ImagePanel";
import NotesPanel from "./components/layout/NotesPanel";

export default function App() {
    const [currentDate, setCurrentDate] = useState(new Date());

    return (
        <div className="bg-white p-4">
            <div className="max-w-5xl mx-auto border rounded-2xl p-4 shadow-lg">
                <div className="grid md:grid-cols-2 gap-4">
                    {/* 👉 PASS DATE HERE */}
                    <ImagePanel currentDate={currentDate} />

                    <div className="flex flex-col gap-4 h-full">
                        <Calendar
                            currentDate={currentDate}
                            setCurrentDate={setCurrentDate}
                        />
                        <NotesPanel currentDate={currentDate} />
                    </div>
                </div>
            </div>
        </div>
    );
}
