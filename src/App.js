import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, add, reset} from './store'

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter App</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(add( 10))}>Add 10</button>
      {/* <button onClick={() => dispatch({type: 'ADD', payload: 10})}>Add 10</button> */}
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
