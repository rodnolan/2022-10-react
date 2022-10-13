import { Level3 } from './Level3';

export const Level2 = ({ prop1 }) => (
  <div
    style={{
      border: '2px solid blue',
      backgroundColor: 'lightblue',
      padding: '1rem'
    }}
  >
    <p>I'm at Level 2 of the hierarchy and I invoke the component at Level 3</p>
    <p>
      I, myself, don't need the props I receive but one of my descendents does.
    </p>

    <Level3 prop1={prop1} />
  </div>
);
