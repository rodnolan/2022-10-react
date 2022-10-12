import PropTypes from 'prop-types';

export const ReadOnlyPerson = (props) => <p>
  ReadOnlyPerson says: Hello, my name is: {props.name.fn} {props.name.mn} {props.name.ln}
</p>

export const EditablePerson = ({name, fnUpdaterFn, mnUpdaterFn, lnUpdaterFn }) => <div>
  <p>EditablePerson says: Hello, my name is: {name.fn} {name.mn} {name.ln}</p>

  <button onClick={
    (event) => {
      fnUpdaterFn('Bill')
    }
  }>update fn</button>
  <button onClick={(event) => {mnUpdaterFn('Allan')}}>update mn</button>
  <button onClick={(event) => {lnUpdaterFn('Gates')}}>update ln</button>
</div>

EditablePerson.propTypes = {
  name: PropTypes.shape({
    fn: PropTypes.string.isRequired,
    mn: PropTypes.string.isRequired,
    ln: PropTypes.string.isRequired,
  }).isRequired,
  fnUpdaterFn: PropTypes.func.isRequired,
  mnUpdaterFn: PropTypes.func.isRequired,
  lnUpdaterFn: PropTypes.func.isRequired,
}