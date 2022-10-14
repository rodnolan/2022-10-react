import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { CompWithApiData } from './CompWithApiData';
import './index.css';
// import { ReduxHome } from './redux/ReduxHome';
// import { PropDrillingProblemDemo } from './propDrillingProblem/PropDrillingProblemDemo';
// import App from './App';
// import { App2 } from './App2';
// import { App2AsClass } from './App2AsClass';
import reportWebVitals from './reportWebVitals';
import { ListWithRoutableAddEditRedux } from './routing-and-redux/ListWithRoutableAddEditRedux';
import { store } from './routing-and-redux/redux/store';
// import { RoutingDemo } from './routing/RoutingDemo';
// import { StylingDemo } from './styling/StylingDemo';
// import { ReactChallenge2 } from './challenges/day7/ReactChallenge2';
// import { ReactChallenge1 } from './challenges/day6/ReactChallenge1';

// import { Provider } from "react-redux";
// import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ReactChallenge1 /> */}
    {/* <ReactChallenge2 /> */}
    {/* <App /> */}
    {/* <App2 /> */}
    {/* <App2AsClass /> */}
    {/* <StylingDemo /> */}
    {/* <CompWithApiData /> */}
    {/* <RoutingDemo /> */}
    {/* <PropDrillingProblemDemo /> */}

    {/* <Provider store={store}>
      <ReduxHome />
    </Provider> */}

    <Provider store={store}>
      <ListWithRoutableAddEditRedux />
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
