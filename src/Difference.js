import PropTypes from 'prop-types';
import {Component} from "react";

export class Difference extends Component {

    render() {
        const {num1, num2} = this.props;
        // if (num1-num2 < 0) {
        //     return <p>The difference between the two numbers is a negative number.</p>
        // }
        // return <p>
        //     The difference between the two numbers is {num1 - num2}.
        // </p>

        return <p>
            The difference between the two numbers is { num1-num2 < 0 ? "a negative number" : num1 - num2 }.
        </p>
    }
}

Difference.propTypes = {
    num1: PropTypes.number.isRequired,
    num2: PropTypes.number.isRequired,
};
