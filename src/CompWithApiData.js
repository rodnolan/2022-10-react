import { useEffect, useState } from "react"

export const CompWithApiData = () => {

  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
  });
  useEffect(
    () => {
      fetch('https://rodnolan.github.io/fed-files/person.json')
      .then((response) => {
        if (response.ok) {
          // happy case
          return response.json()
        } else {
          // sad case
          return null
        }
      })
      .then((jsonResponse) => {
        if (jsonResponse) {
          // happy
          console.log(jsonResponse);
          setPerson(jsonResponse);
        } else {
          // sad
          console.log('error');
        }
      })
    },
    []
  );


  return <>
    {/* <button onClick={() => {

    }}>
      go get data
    </button> */}
    <p>
      this component displays data from an API endpoint
    </p>

    {person.firstName}
    {person.lastName}
  </>
}