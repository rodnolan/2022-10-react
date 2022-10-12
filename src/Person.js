import PropTypes from 'prop-types';
import { useRef } from 'react';

export const ReadOnlyPerson = (props) => <p>
  ReadOnlyPerson says: Hello, my name is: {props.name.fn} {props.name.mn} {props.name.ln}
</p>

export const EditablePerson = ({ name, nameUpdaterFn }) => {

  const fnRef = useRef();
  const mnRef = useRef();
  const lnRef = useRef();

  return <div>
    <p>EditablePerson says: Hello, my name is: {name.fn} {name.mn} {name.ln}</p>

    <form onSubmit={(event) => {
      event.preventDefault();
      const newPerson = {
        fn: fnRef.current.value,
        mn: mnRef.current.value,
        ln: lnRef.current.value,
      }
      nameUpdaterFn(newPerson);
    }}>
      <input type="text" placeholder='fn' ref={fnRef} />
      {/* <button onClick={
        (event) => {
          // nameUpdaterFn('fn', 'Bill')
          nameUpdaterFn('fn', fnRef.current.value)
        }
      }>update fn</button> */}
      <br />


      <input type="text" placeholder='mn' ref={mnRef} />
      {/* <button onClick={(event) => { nameUpdaterFn('mn', mnRef.current.value) }}>update mn</button> */}
      <br />

      <input type="text" placeholder='ln' ref={lnRef} />
      {/* <button onClick={(event) => { nameUpdaterFn('ln', lnRef.current.value) }}>update ln</button> */}
      <br />
      <input type="submit" />
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