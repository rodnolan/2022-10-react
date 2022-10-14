import { ADD_PERSON } from "./allActionTypes";


export const createAddPersonAction = (personToAdd) => ({
  type: ADD_PERSON,
  payload: personToAdd
});