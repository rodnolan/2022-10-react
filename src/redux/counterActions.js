import { CHANGE_BY, DECREMENT, INCREMENT, MULTIPLY_BY_TEN } from "./allActionTypes";

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

export const createMultiplyByTenAction = () => ({
  type: MULTIPLY_BY_TEN
});

