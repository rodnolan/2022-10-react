import PropTypes from 'prop-types';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { TableWithBorder } from './TableWithBorder';

export const PeopleTable = ({ people, setSelectedPerson }) => {

  const propNames = people.length > 0 && Object.keys(people[0]);
  return (
    propNames?.length > 0 ? (
      <TableWithBorder>
        <TableHead
          headings={propNames}
        />
        <TableBody
          rows={people}
          personPropsList={propNames}
          handleSelect={setSelectedPerson}
        />
      </TableWithBorder>
    ) : <p>There is no data to display.</p>
  );
}

PeopleTable.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      middleName: PropTypes.string,
      lastName: PropTypes.string.isRequired,
    })
  ).isRequired
};

