import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "../slices/counter/counterSlice";

function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const onChangeHandler = (state) => {
    if (state && input.length > 0) {
      dispatch(incrementByAmount(parseInt(input)));
      // console.log(state);
    }
    if (!state && input.length > 0) {
      dispatch(decrementByAmount(parseInt(input)));
    }

    setInput("");
  };

  return (
    <>
      <div className="container">
        <h2>Counter: {count}</h2>
        <div className="single">
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Increment Counter By...."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => onChangeHandler(true)}>
            Increment By Number
          </button>
          <button onClick={() => onChangeHandler(false)}>
            Decrement By Number
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
