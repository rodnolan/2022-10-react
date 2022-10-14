import { useSelector } from "react-redux"

export const List = ({ setPersonToEdit }) => {

  const people = useSelector((store) => store.peoplePieSlice.peopleArray);
  return <ol>
    {
      people.map(
        (person) => {
          return <li key={person.id}>
            <button onClick={() => setPersonToEdit(person)}>edit</button>
            {
              ` ${person.fn} ${person.ln}`
            }
          </li>
        }
      )
    }
  </ol>
}