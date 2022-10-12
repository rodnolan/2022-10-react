// import React from "react";
// export class Product extends React.Component {

// }

import PropTypes from 'prop-types';
import {Component} from "react";

export class Product extends Component {

    render() {
      // let {num1, num2} = this.props;

      // PROPS ARE IMMUTABLE... DON'T TRY THIS
      // this.props.num1=13;
      return <p>
        The product of the two numbers is {this.props.num1 * this.props.num2}.
      </p>
        // return <p>
        //     The product of the two numbers is {this.props.num1 * this.props.num2}.
        // </p>
    }
}

Product.propTypes = {
    num1: PropTypes.number.isRequired,
    num2: PropTypes.number.isRequired,
};




