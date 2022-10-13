import { connect } from 'react-redux';
import { CounterDC } from './CounterDC';

const mapDispatchToProps = (gds) => {

  console.log(gds);
  return ({
    counter: gds.counter.counter
  })
}


export const CounterConnector = connect(mapDispatchToProps) (CounterDC);
