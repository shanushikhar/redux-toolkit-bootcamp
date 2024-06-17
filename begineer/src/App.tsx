import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./redux/store";
import { decrement, increment, byNumber } from "./redux/slices/appSlice";

function App() {
  const count = useSelector((state: RootState) => state.appReducer.count);
  const value = useSelector((state: RootState) => state.appReducer.number);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Count value is {count}</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button onClick={() => dispatch(increment(value))}>Increase</button>
        <button onClick={() => dispatch(decrement(value))}>decrease</button>
      </div>
      <div style={{ margin: 10 }}>
        <input
          type="number"
          placeholder="Enter value"
          onChange={(e) => dispatch(byNumber(+e.target.value))}
        />
      </div>
    </>
  );
}

export default App;
