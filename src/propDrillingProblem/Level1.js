import { Level2 } from './Level2';

export const Level1 = ({ prop1 }) => (
  <div
    style={{
      border: '2px solid red',
      backgroundColor: 'lightseagreen',
      padding: '1rem'
    }}
  >
    <p>I'm at Level 1 of the hierarchy and I invoke the component at Level 2</p>
    <p>
      I, myself, don't need the props I receive but one of my descendents does.
    </p>

    <Level2 prop1={prop1} />
  </div>
);
