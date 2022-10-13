import { useState } from "react";
import { PeopleTable } from "./PeopleTable";
import { FormAddPerson } from "./FormAddPerson";
import { FormEditPerson } from "./FormEditPerson";

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
  const [selectedPerson, setSelectedPerson] = useState(null);

  const addNewPersonToState = (newPerson) => {
    const copyOfPeople = [...people];
    copyOfPeople.push(newPerson);
    setPeople(copyOfPeople);
  }

  const updatePersonInState = (editedPerson) => {
    // console.log(`updating array with `, editedPerson);
    const copyOfPeople = [...people];
    const originalPersonIndex = copyOfPeople.findIndex((person) => person.id === editedPerson.id);
    copyOfPeople[originalPersonIndex] = editedPerson;
    setPeople(copyOfPeople);
    setSelectedPerson(null);
  }

  return <>
    <PeopleTable
      people={people}
      setSelectedPerson={setSelectedPerson}
    />
    {
      selectedPerson ? (
        <FormEditPerson
          personToEdit={selectedPerson}
          personEditorFunction={updatePersonInState}
          editCancelFunction={() => setSelectedPerson(null)}
        />
      ) : (
        <FormAddPerson
          personAdderFunction={addNewPersonToState}
        />
      )
    }
  </>
}
