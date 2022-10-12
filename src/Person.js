import PropTypes from 'prop-types';
import { useRef } from 'react';

export const ReadOnlyPerson = (props) => <p>
  ReadOnlyPerson says: Hello, my name is: {props.name.fn} {props.name.mn} {props.name.ln}
</p>

export const EditablePerson = ({ name, nameUpdaterFn }) => {

  // const fnRef = useRef();
  // const mnRef = useRef();
  // const lnRef = useRef();

  const onChangeHandler = (event) => {
    // collect the latest keystroke(s)
    console.log(`${event.target.id}: ${event.target.value}`);

    // make a new object
    const newPerson = {
      ...name,
      [event.target.id]: event.target.value
    }

    // send to parent
    nameUpdaterFn(newPerson);
  }


  return <div>
    <p>EditablePerson says: Hello, my name is: {name.fn} {name.mn} {name.ln}</p>

    {/* <form onSubmit={(event) => {
      event.preventDefault();
      const newPerson = {
        fn: fnRef.current.value,
        mn: mnRef.current.value,
        ln: lnRef.current.value,
      }
      nameUpdaterFn(newPerson);
    }}> */}
    <form>
      {/* <input id="fn" type="text" placeholder='fn' ref={fnRef} value={name.fn} onChange={onChangeHandler} /> */}
      <input id="fn" type="text" placeholder='fn' value={name.fn} onChange={onChangeHandler} />
      <br />

      {/* <input id="mn" type="text" placeholder='mn' ref={mnRef} value={name.mn} onChange={onChangeHandler} /> */}
      <input id="mn" type="text" placeholder='mn' value={name.mn} onChange={onChangeHandler} />
      <br />

      {/* <input id="ln" type="text" placeholder='ln' ref={lnRef} value={name.ln} onChange={onChangeHandler} /> */}
      <input id="ln" type="text" placeholder='ln' value={name.ln} onChange={onChangeHandler} />
      <br />
      {/* <input type="submit" /> */}
    </form>
  </div>
}
EditablePerson.propTypes = {
  name: PropTypes.shape({
    fn: PropTypes.string.isRequired,
    mn: PropTypes.string.isRequired,
    ln: PropTypes.string.isRequired,
  }).isRequired,
  nameUpdaterFn: PropTypes.func.isRequired,
}