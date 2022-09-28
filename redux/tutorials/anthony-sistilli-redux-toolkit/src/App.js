import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { DEC, INC, INC_AMOUNT } from './redux/counter';

function App() {
  //const [count, setCount] = useState(0);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  // Same as above
  // const count = useSelector((state) => state.counter.count);

  // const increment = () => setCount(count + 1);
  // const decrement = () => setCount(count - 1);
  const increment = () => dispatch(INC());
  const decrement = () => dispatch(DEC());
  const incrementByAmount = () => dispatch(INC_AMOUNT(33));

  return (
    <div className="App">
      <h1>The count is:{count}</h1>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={incrementByAmount}>DECREMENT BY 33</button>
    </div>
  );
}

export default App;
