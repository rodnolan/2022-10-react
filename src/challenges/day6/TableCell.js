import PropTypes from 'prop-types';

export const TableCell = ({ contents }) => <td>{contents}</td>;

TableCell.propTypes = {
    contents: PropTypes.any
};