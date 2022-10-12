import PropTypes from 'prop-types';

export const TableCell = ({ contents }) => <td>{contents && String(contents)}</td>;

TableCell.propTypes = {
  contents: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
};