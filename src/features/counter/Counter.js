import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count); ///take the state from store using useSelector
  return (
    <div>
      <button onClick={() => dispatch({ type: "COUNTER.INCREMENT" })}>+</button>
      <span> {count} </span>
      <button onClick={() => dispatch({ type: "COUNTER.DECREMENT" })}>-</button>
    </div>
  );
};

export default Counter;
