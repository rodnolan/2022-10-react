export const List = ({people, setPersonToEdit}) => <ol>
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