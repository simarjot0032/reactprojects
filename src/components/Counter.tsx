import { useState } from "react";
interface prop {
  onclick: () => void;
}
export const Counter = ({ onclick }: prop) => {
  const [count, setcount] = useState(0);
  return (
    <>
      <div className="container">
        <div className="counter">
          <h1 className="count">{count}</h1>
          <div className="buttons">
            {/* decrease */}
            <button
              className="decrease"
              onClick={() => {
                navigator.vibrate(200);

                setcount(count - 1);
                // onclick;
                if (count === 0 || count < 0) {
                  setcount(0);
                }
              }}
            >
              <i className="fa-solid fa-minus fa-2x"></i>
            </button>
            <button
              className="reset"
              onClick={() => {
                navigator.vibrate(200);

                setcount(0);
              }}
            >
              <i className="fa-solid fa-rotate-right fa-2x"></i>
            </button>
            <button
              className="increase"
              onClick={() => {
                setcount(count + 1);
                navigator.vibrate(200);
              }}
            >
              <i className="fa-solid fa-plus fa-2x"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
