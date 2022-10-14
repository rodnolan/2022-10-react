import { ADD_PERSON, UPDATE_PERSON } from "./allActionTypes";

export const createAddPersonAction = (personToAdd) => ({
  type: ADD_PERSON,
  payload: personToAdd
});

export const createUpdatePersonAction = (personToUpdate) => ({
  type: UPDATE_PERSON,
  payload: personToUpdate
});