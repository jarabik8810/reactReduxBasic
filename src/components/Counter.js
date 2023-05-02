import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counter';

//import { INCREMENT } from '../store/index';

import classes from './Counter.module.css';



const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);
  const toggle = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    //dispatch({ type: INCREMENT });
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    //dispatch({ type: 'increase', amount: 5 });
    dispatch(counterActions.increase(5))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>
      }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
