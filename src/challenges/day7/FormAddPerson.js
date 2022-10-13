import { useRef } from "react";

export const FormAddPerson = ({personAdderFunction}) => {

  const refFn = useRef();
  const refMn = useRef();
  const refLn = useRef();

  const clearForm = () => {
    refFn.current.value = '';
    refMn.current.value = '';
    refLn.current.value = '';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    personAdderFunction({
      id: 0,
      firstName: refFn.current.value,
      middleName: refMn.current.value,
      lastName: refLn.current.value
    });
    clearForm();
  }
  return <>
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add a new person</legend>
        <label>First Name</label><br />
        <input type="text" ref={refFn} /><br />

        <label>Middle Name</label><br />
        <input type="text" ref={refMn} /><br />

        <label>Last Name</label><br />
        <input type="text" ref={refLn} /><br />

        <input type="submit" value="Add" />
      </fieldset>
    </form>
  </>
}