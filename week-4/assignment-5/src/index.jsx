import { useState } from "react";
const btnClass =
  "duration-300 transition-all text-white bg-black hover:bg-black/80 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center";

const Counter = ({ count, handlePlus }) => (
  <div className="flex items-center gap-5">
    <button className={btnClass} onClick={handlePlus}>
      +1
    </button>
    <span className="text-lg text-medium flex-1 text-right">{count}</span>
  </div>
);

export default function App() {
  const [counters, setCounters] = useState([0, 0, 0]); //initial state

  //All plus 1 handler
  const handleAllplus = () => {
    setCounters((prev) => prev.map((v) => v + 1));
  };
  //Single counter plus 1
  const handlePlus = (i) => {
    const newCounters = [...counters];
    newCounters[i]++;
    setCounters(newCounters);
  };
  //Add a new counter
  const handleAddCounter = () => {
    setCounters((prev) => [...prev, 0]);
  };
  return (
    <div className="grid place-items-center my-8 px-4 gap-4">
      <button className={btnClass} onClick={handleAllplus}>
        All + 1
      </button>
      <div className="grid gap-2">
        {counters.map((count, i) => (
          <Counter key={i} count={count} handlePlus={() => handlePlus(i)} />
        ))}
      </div>
      <button className={btnClass} onClick={handleAddCounter}>
        Add a Counter
      </button>
    </div>
  );
}
