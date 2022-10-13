import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { TableCell } from './TableCell';

export const TableBody = ({ rows, personPropsList, handleSelect }) => (
  <tbody>
    {
      rows.map((row) => (
        <tr
          key={uuidv4()}
          onClick={() => {
            // console.log('selected', row);
            handleSelect(row)
          }}
          style={{cursor: 'pointer'}}>
          {
            personPropsList.map(prop => <TableCell key={uuidv4()} contents={row[prop]}/>)
          }
        </tr>
      ))
    }
  </tbody>
);

TableBody.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        middleName: PropTypes.string,
        lastName: PropTypes.string.isRequired,
      }
    )
  ).isRequired,
  personPropsList: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired
};
