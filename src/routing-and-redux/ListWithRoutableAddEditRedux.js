import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { AddForm } from "./AddForm";
import { EditForm } from "./EditForm";
import { List } from "./List";

export const ListWithRoutableAddEditRedux = () => {

  const [personToEdit, setPersonToEdit] = useState(    );
  const [people, setPeople] = useState([
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
  ]);

  const addPerson = (person) => {
    const peopleCopy = [...people]; // shallow copy Object.assign AND ...spread operator

    peopleCopy.push({ ...person, id: uuidv4() });

    setPeople(peopleCopy);
  }

  const editPerson = (person) => {
    const peopleCopy = [...people];

    // figure out where in the array this item lives
    let indexOfItemToEdit = people.findIndex((element) => element.id === person.id)
    if (indexOfItemToEdit < 0) {
      console.log('there is a problem');
    } else {
      peopleCopy[indexOfItemToEdit] = person;
      setPeople(peopleCopy);
      setPersonToEdit();
    }

    console.log('replace the existing object with id ', person.id);
  }

return <>
    <List
      people={people}
      setPersonToEdit={setPersonToEdit}
    />

    <AddForm
      personAdderFunction={addPerson}
    />

    {
      personToEdit ? <EditForm
        person={personToEdit}
        personUpdaterFunction={editPerson}
      /> : <p>there is no person to edit</p>
    }
  </>
}
