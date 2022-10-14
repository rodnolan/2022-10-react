export const CounterDC = ({counter, incrementCounter, decrementCounter, changeCounterBy}) => <>
  <p>The click counter is currently up to {counter}</p>
  <button onClick={ () => {
    incrementCounter()
  }}> increment </button>
  <button onClick={ () => {
    decrementCounter()
  }}> decrement </button>
  <button onClick={ () => {
    changeCounterBy(5)
  }}> change by 5 </button>
</>