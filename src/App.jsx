import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  const colors = ['Red', 'Green', 'Blue', 'Orange', 'Olive', 'Black', 'Purple', 'Pink', 'Violet']
  return (
    <div
      className="w-full h-screen duration-1000"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((i) => (
          <button
          key = {i}
            onClick={() => setColor(i)}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: i }}
          >
            {i}
          </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
