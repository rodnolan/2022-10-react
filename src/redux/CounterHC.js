import { useDispatch, useSelector } from "react-redux"
import { createChangeCounterByAction, createDecrementAction, createIncrementAction, createMultiplyByTenAction, createResetToZeroAction } from "./counterActions";

export const CounterHC = () => {

  const dispatch = useDispatch();
  const counter = useSelector((gds) => gds.counter.counter);

  return <>
    <p>The click counter is currently up to {counter}</p>
    <button onClick={() => {
      // incrementCounter()
      dispatch(createIncrementAction())
    }}> increment </button>
    <button onClick={() => {
      // decrementCounter()
      dispatch(createDecrementAction())
    }}> decrement </button>
    <button onClick={() => {
      // changeCounterBy(5)
      dispatch(createChangeCounterByAction(5))
    }}> change by 5 </button>
    <button onClick={() => {
      // multiplyByTen()
      dispatch(createMultiplyByTenAction())
    }}> multiply by 10 </button>
    <button onClick={() => {
      dispatch(createResetToZeroAction())
    }}> reset to 0 </button>
  </>
}