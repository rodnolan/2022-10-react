import { CHANGE_BY, DECREMENT, INCREMENT, MULTIPLY_BY_TEN } from "./allActionTypes"

const defaultData = {
  counter: 0
}

const handleIncrement = (state,  action) => {
  return {
    counter: state.counter + 1
  }
}
const handleDecrement = (state,  action) => {
  return {
    counter: state.counter - 1
  }
}

const handleChangeBy = (state, action) => {
  return {
    counter: state.counter + action.payload
  }
}

const handleMultiplyByTen = (state, action) => {
  return {
    counter: state.counter * 10
  }
}

export const counterReducer = (state = defaultData, action) => {
  console.log('counterReducer was called with ', action.type);

  const actionHandlers = {
    [INCREMENT]: handleIncrement,
    [DECREMENT]: handleDecrement,
    [CHANGE_BY]: handleChangeBy,
    [MULTIPLY_BY_TEN]: handleMultiplyByTen,
  };

  const reducerToCall = actionHandlers[action.type];
  return reducerToCall ? reducerToCall(state, action) : state;
}
