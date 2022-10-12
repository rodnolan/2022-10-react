import { useState } from "react";
import { EditablePerson, ReadOnlyPerson } from "./Person";

export const App2 = () => {

  const me = {
    fn: 'R',
    ln: 'N',
    mn: 'D'
  }
  const [meState, setMeState] = useState(me);

  const firstNameUpdater = (event) => {
    console.table(meState);
    setMeState(
      {
        ...meState,
        fn: 'Mickey',
        mn: 'Theodore'
      }
    ); // me.fn = 'Mickey'; // mutate React state
    console.table(meState);
  }

  function lastNameUpdater() {
    console.table(meState);
    setMeState({
      ...meState,
      ln: 'Mouse'
    }); // me.ln = 'Mouse'; // mutate React state
    console.table(meState);
  }

  return <>
    <button onClick={firstNameUpdater}>change first name of me that React DOES NOT ignore</button>
    <button onClick={lastNameUpdater}>change last name of me that React DOES NOT ignore</button>
    {/* <p>{meState.fn} {meState.mn} {meState.ln}</p> */}
    <ReadOnlyPerson name={meState} />
    {/*
      props = {
        name: {
          fn: '',
          mn: '',
          ln: '',
        },
        num1: 4
      }
      ReadOnlyPerson(props)

    */}

    <hr />

    <EditablePerson
      name={meState}
      nameUpdaterFn={(propName, propValue) => {
        setMeState({
          ...meState,
          [propName]: propValue
        })
      }}
    />


    {/* <hr />
    <p>{me.fn} {me.ln}</p>
    <button onClick={
      () => {
        console.table(me);
        me.fn = 'Mickey'; // mutate data
        console.table(me);
      }
    }>change first name of me that React ignores</button> */}

    {/* <button click="alert('btn was clicked')">change first name</button> */}
  </>
}