import { useState } from "react";

export const FormEditPerson = ({personToEdit, personEditorFunction, editCancelFunction}) => {

  // console.log('setting initial value to ', personToEdit);
  const [person, setPerson] = useState(personToEdit);

  const handleChange = (event) => {
    setPerson({
      ...person,
      [event.target.id]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    personEditorFunction(person);
  }

  const handleReset = () => {
    editCancelFunction();
  }

return person ? <>
  <form onSubmit={handleSubmit} onReset={handleReset}>
    <fieldset>
      <legend>Edit {personToEdit.fn}</legend>
      <label>First Name</label><br />
      <input id="firstName" type="text" value={person.firstName} onChange={handleChange} /><br />

      <label>Middle Name</label><br />
      <input id="middleName" type="text" value={person.middleName} onChange={handleChange} /><br />

      <label>Last Name</label><br />
      <input id="lastName" type="text" value={person.lastName} onChange={handleChange} /><br />

      <input type="submit" value="Save" />
      <input type="reset" value="Cancel" />
    </fieldset>
  </form>
  </> : <p>select a person to begin editing</p>
}