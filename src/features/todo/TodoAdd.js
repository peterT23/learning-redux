import React, { useState } from "react";
import { addTodo } from "./actions";
import { useDispatch } from "react-redux";

const TodoAdd = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  return (
    <div onChange={(e) => setText(e.target.value)}>
      <input type="text" id="todo" />
      <button
        onClick={() => {
          dispatch(addTodo(text));
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TodoAdd;
