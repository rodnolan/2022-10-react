import { PeopleTable } from "./PeopleTable";

export const ReactChallenge1 = () => {

  const people = [
    {
      id: 1,
      firstName: 'Kermit',
      middleName: 'The',
      lastName: 'Frog'
    },
    {
      id: 2,
      firstName: 'Rodney',
      middleName: 'David',
      lastName: 'Nolan'
    },
    {
      id: 3,
      firstName: 'John',
      lastName: 'Deere'
    },
  ];

  return <PeopleTable people={people} />;
}
