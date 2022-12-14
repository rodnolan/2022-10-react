import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAddPersonAction } from "./redux/peopleActionCreators";

export const AddForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fnRef = useRef();
  const lnRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const firstNameValueFromFormField = fnRef.current.value;
    const lastNameValueFromFormField = lnRef.current.value;
    // personAdderFunction({
    //   fn: firstNameValueFromFormField,
    //   ln: lastNameValueFromFormField
    // });

    dispatch(createAddPersonAction({
      // id: 0,
      fn: firstNameValueFromFormField,
      ln: lastNameValueFromFormField
    }))

    fnRef.current.value = '';
    lnRef.current.value = '';

    navigate('/');
  }

  return <>
    <h2>Person Add Form (uncontrolled componnent)</h2>

    <form onSubmit={handleSubmit}>
      <label htmlFor="fn">First Name</label>
      <input
        id="fn"
        type="text"
        ref={fnRef}
      /><br />
      <label htmlFor="ln">Last Name</label>
      <input
        id="ln"
        type="text"
        ref={lnRef}
      /><br />
      <input type="submit" />
    </form>
  </>;
}