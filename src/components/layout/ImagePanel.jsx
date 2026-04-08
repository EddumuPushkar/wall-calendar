const images = {
    0: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    1: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    2: "https://plus.unsplash.com/premium_photo-1664005877764-122a552ebf2e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    3: "https://images.unsplash.com/photo-1491147334573-44cbb4602074?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    4: "https://images.unsplash.com/photo-1525923838299-2312b60f6d69?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    5: "https://plus.unsplash.com/premium_photo-1663961915701-444d9e8d8744?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    6: "https://plus.unsplash.com/premium_photo-1682050733502-f58b7f499490?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    7: "https://plus.unsplash.com/premium_photo-1663962158765-982d6ad0d006?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    8: "https://images.unsplash.com/photo-1522386936864-c81ca9c02464?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGxlYXZlc3xlbnwwfHwwfHx8MA%3D%3D",
    9: "https://images.unsplash.com/photo-1535882832-ac75c142f79f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    10: "https://plus.unsplash.com/premium_photo-1675746575907-20e573565bc2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    11: "https://images.unsplash.com/photo-1517868750774-cee9b34b7a48?q=80&w=706&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export default function ImagePanel({ currentDate }) {
    const month = currentDate.getMonth();

    return (
        <div className="border rounded-2xl overflow-hidden h-[650px]">
            <img
                key={month}
                src={images[month]}
                className="w-full h-full object-cover transition-opacity duration-500"
            />
        </div>
    );
}
