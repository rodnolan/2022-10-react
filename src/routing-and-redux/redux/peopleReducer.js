import { ADD_PERSON, UPDATE_PERSON } from "./allActionTypes";

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

const updatePerson = (state, action) => {

  const indexOfItemToUpdate = state.peopleArray.findIndex(person => person.id === action.payload.id);
  const peopleCopy = [...state.peopleArray];
  peopleCopy[indexOfItemToUpdate] = action.payload;

  return {
    ...state,
    peopleArray: peopleCopy
  }

}


export const peopleReducer = (state = defaultState, action) => {

  const actionHandlers = {
    [ADD_PERSON]: addPerson,
    [UPDATE_PERSON]: updatePerson,
  };
  const reducerToCall = actionHandlers[action.type];

  return reducerToCall ? reducerToCall(state, action) : state;
}