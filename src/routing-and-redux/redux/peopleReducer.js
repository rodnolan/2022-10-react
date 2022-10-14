import { ADD_PERSON } from "./allActionTypes";

const defaultState = {
  peopleArray: [
    {
      id: 123,
      fn: 'Mickey',
      ln: 'Mouse'
    },
    {
      id: 543,
      fn: 'Bill',
      ln: 'Gates'
    },
    {
      id: 763,
      fn: 'Steve',
      ln: 'Jobs'
    },
  ],
  personToEdit: null
};

const addPerson = (state, action) => {

  const updatedPeopleArray = [...state.peopleArray];
  const ids = state.peopleArray.map((person) => person.id);
  const generatedId = ids.reduce((a, b) => Math.max(a, b), -Infinity) + 1;
  const personWithGeneratedId = {
    ...action.payload,
    id: generatedId
  };

  updatedPeopleArray.push(personWithGeneratedId);

  return {
    ...state,
    peopleArray: updatedPeopleArray
  }

}


export const peopleReducer = (state = defaultState, action) => {

  const actionHandlers = {
    [ADD_PERSON]: addPerson
  };
  const reducerToCall = actionHandlers[action.type];

  return reducerToCall ? reducerToCall(state, action) : state;
}