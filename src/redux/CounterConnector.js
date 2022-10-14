import { connect } from 'react-redux';
import { createChangeCounterByAction, createDecrementAction, createIncrementAction } from './counterActions';
import { CounterDC } from './CounterDC';

const mapStateToProps = (gds) => {
  console.log(gds);
  return ({
    counter: gds.counter.counter
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => dispatch(createIncrementAction()),
    decrementCounter: () => dispatch(createDecrementAction()),
    changeCounterBy: (num) => dispatch(createChangeCounterByAction(num))
  }
}


export const CounterConnector = connect(mapStateToProps, mapDispatchToProps) (CounterDC);

/**
 * <CounterDC
 *  counter={gds.counter.counter}
 *  incrementCounter={ a function that lets me request to increment the counter variable in the store }
 *  decrementCounter={ a function that lets me request to decrement the counter variable in the store }
 *  changeCounterBy={ a function that lets me request to change the counter variable by a variable amount }
 *
 *
 *
 */
