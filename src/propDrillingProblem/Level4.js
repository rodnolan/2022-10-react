export const Level4 = ({ prop1 }) => (
  <div
    style={{
      border: '2px solid yellow',
      backgroundColor: 'lightcoral',
      padding: '1rem'
    }}
  >
    <p>
      I'm at Level 4 of the hierarchy and I need the prop that's defined up at
      the top
    </p>

    {prop1}
  </div>
);
