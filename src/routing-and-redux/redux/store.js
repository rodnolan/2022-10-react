import { combineReducers, createStore } from "redux";
import { peopleReducer } from "./peopleReducer";

const rootReducer = combineReducers({
  peoplePieSlice: peopleReducer,
})

export const store = createStore( rootReducer );
// console.log(store);
// console.log(store?.people);
// console.log(store?.people?.length);