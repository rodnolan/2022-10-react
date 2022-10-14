import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createUpdatePersonAction } from "./redux/peopleActionCreators";

export const EditForm = () => {

  const [personLocal, setPersonLocal] = useState();
  const {id} = useParams();
  const people = useSelector(gds => gds.peoplePieSlice.peopleArray)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(
    () => {
      if (people && people.length > 0) {
        const personToEdit = people.find(person => person.id === parseInt(id));
        console.log(personToEdit);
        personToEdit && setPersonLocal(personToEdit);
      }
    },
    [id, people]
  );


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createUpdatePersonAction(personLocal))
    navigate('/');
  }

  const handleChange = (event) => {
    console.log('the form field was changed');
    console.log(event.target.id, event.target.value);
    setPersonLocal({
      ...personLocal, ...{[event.target.id]: event.target.value}
    });
  }

  return personLocal ? <>
    <h2>Person Edit Form (controlled componnent)</h2>
    <p>{personLocal?.fn} {personLocal?.ln}</p>

    <form onSubmit={handleSubmit}>
      <label htmlFor="fn">First Name</label>
      <input
        id="fn"
        type="text"
        value={personLocal?.fn}
        onChange={handleChange}
      /><br />

      <label htmlFor="ln">Last Name</label>
      <input
        id="ln"
        type="text"
        value={personLocal?.ln}
        onChange={handleChange}
      /><br />

      <input type="submit" />
    </form>
  </> : <p>person to edit is not defined</p>;
}