// import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './actions';

function App() {
  const data = useSelector((state)=>{return state});
  const dispatch = useDispatch();

  console.log(data);
  const onIncrement =()=>{
    dispatch(increment())
  }
  const onDecrement = ()=>{
    dispatch(decrement());
  }

  return (
    <div>
      {data.counter}
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrment</button>
    </div>
  );
}

export default App;
