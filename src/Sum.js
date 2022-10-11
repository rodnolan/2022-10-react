import PropTypes from 'prop-types';

export const Sum = ({num1, num2}) => <p>
    The sum of the two numbers is {num1 + num2}.
</p>

Sum.propTypes = {
    num1: PropTypes.number.isRequired,
    num2: PropTypes.number.isRequired,
};



