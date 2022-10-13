import { Level1 } from './Level1';

export const PropDrillingProblemDemo = () => {
  // maybe this data comes from a remote API call...
  const randomData = 'this is a random value';

  return <Level1 prop1={randomData} />;
};
