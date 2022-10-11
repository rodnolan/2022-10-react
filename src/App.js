import React from 'react';
import { ComponentWithProps } from './ComponentWithProps';
import { Difference } from './Difference';
import asdbc from './logo.svg';
// import './App.css';
import { MyFirstComponent } from './MyFirstComponent';
import { Product } from './Product';
import { Sum } from './Sum';

function App() {
  return <>
    <MyFirstComponent />
    {/* <SimpleComponent /> */}
    {/* <SimpleList />
    <SimpleListAsJSX /> */}



    <ComponentWithProps attr1="first" attr2="second" attr3="third" />
    <ComponentWithProps attr1="first" />
    <ComponentWithProps attr1='lkahslkfhdaslk'  />

    <Sum num1={123} num2={321} />

    {/* <Sum n1={123} n2={321} /> */}
    {/* <Sum num1="123" num2="321" /> */}

    <Product num1={12} num2={3} />

    <Difference num1={10} num2={5} />
    <Difference num1={5} num2={10} />


    {/* <ComponentWithProps               attr2="second" attr3="third" />
    <ComponentWithProps /> */}

{/*

  const props = {
    attr2: "second",
    attr1: "first"
    attr3: "third"
  };

  return ComponentWithProps(props)

*/}

    <img src={asdbc} className="App-logo" alt="logo" height={1250} />
    <img src={process.env.PUBLIC_URL + 'logo192.png'} alt="the company logo" height={250}/>
  </>
}

export default App;


// const SimpleComponent = () => React.createElement('div', null, "this is a plain old div tag");

// const SimpleList = () => React.createElement('ol', null, [
//   React.createElement('li', null, "item 1"),
//   React.createElement('li', null, "item 2"),
//   React.createElement('li', null, "item 3"),
// ]);

// {/* <div>this is a plain old div tag</div> */}


// const SimpleListAsJSX = () => <ol>
//   <li>item 1</li>
//   <li>item 2</li>
//   <li>item 3</li>
//   <li>item 4</li>
// </ol>;