import { TOGGLE_TODO, ADD_TODO, SET_FILTER } from "./reducer";
let nextTodoID = 0;
const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoID++,
    text,
  },
});
const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
export { addTodo, toggleTodo, setFilter };
