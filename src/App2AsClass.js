import {Component} from "react";
import { ReadOnlyPerson } from "./Person";

export class App2AsClass extends Component {

  constructor(props) {
    // pass props to super
    super(props);

    // define default state
    this.state = {
      fn: 'R',
      ln: 'N',
      mn: 'D'
    }

    // bind event handler functions
    this.firstNameUpdater = this.firstNameUpdater.bind(this);
    this.lastNameUpdater = this.lastNameUpdater.bind(this);

  }

  lastNameUpdater() {
    // console.log(this);
    this.setState({ln: 'Dylan'})
  }
  firstNameUpdater() {
    // console.log(this);
    this.setState({fn: 'Bob'})
  }

  render() {
    return <>

      <button onClick={this.firstNameUpdater}>update fn</button>

      <button onClick={() => {
        // console.log(this);
        this.setState({mn: 'Allen'})
      }}>update mn</button>

      <button onClick={this.lastNameUpdater}>update ln</button>

      <ReadOnlyPerson name={this.state}/>;
    </>
  }

  // componentDidCatch
  // componentDidUpdate
  // shouldComponentUpdate

}