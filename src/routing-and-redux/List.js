import { useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom";

export const List = () => {

  const navigate = useNavigate();
  const people = useSelector((store) => store.peoplePieSlice.peopleArray);
  return <>
    <ol>
      {
        people.map(
          (person) => {
            return <li key={person.id}>
              <button onClick={() => navigate(`/edit/${person.id}`)}>edit</button>
              {
                ` ${person.fn} ${person.ln}`
              }
            </li>
          }
        )
      }
    </ol>
    <NavLink to="/add">Add a new person</NavLink>
  </>

}