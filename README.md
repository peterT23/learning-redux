## Setup project

- create-react-app
- reset `src/`
- Installation
  `npm i redux react-redux redux-devtools-extension`

## Counter

- `src/features/counter/reducer.js`:

```js
const INCREMENT = "COUNTER.INCREMENT";
const DECREMENT = "COUNTER.DECREMENT";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };

    default:
      return state;
  }
};
export default counterReducer;
```

- `src/app/store.js`:

```js
import { createStore, combineReducers } from "redux";
import counterReducer from "../features/counter/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
//globalstate
const initialState = {};
const store = createStore(
  combineReducers({
    counter: counterReducer,
  }),
  initialState,
  composeWithDevTools()
);

export default store;
```

- `src/features/counter/Counter.js`

```js
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <button onClick={() => dispatch({ type: "COUNTER.INCREMENT" })}>+</button>
      <span> {count} </span>
      <button onClick={() => dispatch({ type: "COUNTER.DECREMENT" })}>-</button>
    </div>
  );
};

export default Counter;
```

- `src/index.js`
- `import the provider,store to index.js`

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./app/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
