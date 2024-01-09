import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  // let count = 1;

  return (
    <Counter
      onclick={() => {
        setCount(count - 1);
      }}
    ></Counter>
  );
}

export default App;
