import { CHANGE_BY, DECREMENT, INCREMENT } from "./allActionTypes";

export const createIncrementAction = () => ({
  type: INCREMENT
});

export const createDecrementAction = () => ({
  type: DECREMENT
});

export const createChangeCounterByAction = (amountToChangeCounterBy) => ({
  type: CHANGE_BY,
  payload: amountToChangeCounterBy
});

