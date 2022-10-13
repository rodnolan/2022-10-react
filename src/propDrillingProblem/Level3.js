import { Level4 } from './Level4';

export const Level3 = ({ prop1 }) => (
  <div
    style={{
      border: '2px solid green',
      backgroundColor: 'lightgreen',
      padding: '1rem'
    }}
  >
    <p>I'm at Level 4 of the hierarchy and I invoke the component at Level 4</p>
    <p>
      I, myself, don't need the props I receive but one of my descendents does.
    </p>

    <Level4 />
  </div>
);
