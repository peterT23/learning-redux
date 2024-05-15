const ADD_TODO = "TODOLIST.ADD";
const TOGGLE_TODO = "TODO.TOGGLE";
const SET_FILTER = "TODO.SET_FILTER";
export { ADD_TODO, TOGGLE_TODO, SET_FILTER };

const innitialState = { todos: [], filter: "SHOW_ALL" };
const todoReducer = (state = innitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: payload.id, text: payload.text, completed: false },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== payload.id) return todo;
          return { ...todo, completed: !todo.completed };
        }),
      };
    case SET_FILTER:
      return { ...state, filter: payload };
    default:
      return state;
  }
};

export default todoReducer;
