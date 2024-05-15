import React from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import TodoFilterBtns from "./TodoFilterBtns";
const Todo = () => {
  return (
    <div>
      <TodoAdd />
      <TodoList />
      <TodoFilterBtns />
    </div>
  );
};

export default Todo;
