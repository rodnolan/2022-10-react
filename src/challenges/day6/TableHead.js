import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export const TableHead = ({ headings }) => (
  <thead>
    <tr>
      {
        headings.map(
          heading => {
            // split on the upper case characters and join them back together with spaces
            const str = heading.split(/(?=[A-Z])/).join(" ");

            return (
              <th
                key={uuidv4()}
                style={{
                  borderBottom: '1px solid #367C2A',
                  backgroundColor: '#367C2A',
                  color: '#FFDE00',
                  padding: '.5rem'
                }}
              >
                {str.toUpperCase()}
              </th>
            );
          }
        )
      }
    </tr>
  </thead>
);

TableHead.propTypes = {
  headings: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired
};