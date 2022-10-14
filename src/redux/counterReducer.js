import { CHANGE_BY, DECREMENT, INCREMENT } from "./allActionTypes"

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

export const counterReducer = (state = defaultData, action) => {
  console.log('counterReducer was called with ', action.type);

  const actionHandlers = {
    [INCREMENT]: handleIncrement,
    [DECREMENT]: handleDecrement,
    [CHANGE_BY]: handleChangeBy,
  };

  const reducerToCall = actionHandlers[action.type];
  return reducerToCall ? reducerToCall(state, action) : state;
}
