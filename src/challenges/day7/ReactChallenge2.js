import { useState } from "react";
import { PeopleTable } from "./PeopleTable";
import { FormAddPerson } from "./FormAddPerson";

export const ReactChallenge2 = () => {

  const defaultPeople = [
    {
      id: 1,
      firstName: 'Kermit',
      middleName: 'The',
      lastName: 'Frog',
    },
    {
      id: 2,
      firstName: 'Rodney',
      middleName: 'David',
      lastName: 'Nolan'
    },
    {
      id: 3,
      firstName: 'John',
      lastName: 'Deere'
    },
  ];

  const [people, setPeople] = useState(defaultPeople);

  const addNewPersonToState = (newPerson) => {
    const copyOfPeople = [...people];
    copyOfPeople.push(newPerson);
    setPeople(copyOfPeople);
  }

  return <>
    <PeopleTable people={people} />
    <FormAddPerson personAdderFunction={addNewPersonToState} />
  </>
}
