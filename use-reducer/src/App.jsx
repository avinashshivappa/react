import { useState, useReducer } from "react";
import "./App.css";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "increament":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decreament":
      return {
        ...state,
        count: state.count - 1,
      };
    case "initCount":
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
const initialState = {
  count: 0,
};

function App() {
  const [input, setInput] = useState(0);
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div className="App">
      <h1>Reducer Example</h1>
      <div>
        <label>Start Count:</label>
        <input
          type="number"
          onChange={(e) => setInput(parseInt(e.target.value))}
        />
        <br />
        <br />
        <button onClick={() => dispatch({ type: "initCount", payload: input })}>
          Initialize counter
        </button>
      </div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increament" })}>
        increament
      </button>
      <br />
      <button onClick={() => dispatch({ type: "decreament" })}>
        decreament
      </button>
    </div>
  );
}

export default App;
