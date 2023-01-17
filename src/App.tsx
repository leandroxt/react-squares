import { useState } from "react";
import Square, { amountSquare } from "./Square";

const squares = [...new Array(amountSquare)].map((_, i) => i + 1);

function App() {
  const [currentId, setCurrentId] = useState<number>(0);

  function setCurrent(id: number) {
    setCurrentId(id);
  }

  return (
    <div className="wrap">
      {squares.map((id) => (
        <Square key={id} id={id} currentId={currentId} onClick={setCurrent} />
      ))}
    </div>
  );
}

export default App;
