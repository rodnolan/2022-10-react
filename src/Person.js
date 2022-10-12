import PropTypes from 'prop-types';

export const ReadOnlyPerson = (props) => <p>
  ReadOnlyPerson says: Hello, my name is: {props.name.fn} {props.name.mn} {props.name.ln}
</p>

export const EditablePerson = ({name, nameUpdaterFn }) => <div>
  <p>EditablePerson says: Hello, my name is: {name.fn} {name.mn} {name.ln}</p>

  <button onClick={
    (event) => {
      nameUpdaterFn('fn', 'Bill')
    }
  }>update fn</button>
  <button onClick={(event) => {nameUpdaterFn('mn', 'Allan')}}>update mn</button>
  <button onClick={(event) => {nameUpdaterFn('ln', 'Gates')}}>update ln</button>
</div>

EditablePerson.propTypes = {
  name: PropTypes.shape({
    fn: PropTypes.string.isRequired,
    mn: PropTypes.string.isRequired,
    ln: PropTypes.string.isRequired,
  }).isRequired,
  nameUpdaterFn: PropTypes.func.isRequired,
}