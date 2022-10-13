import { Screen1 } from "./Screen1";
import { Screen2 } from "./Screen2";
import { Screen3 } from "./Screen3";

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';


export const RoutingDemo = () => <>

  <Router>
    <h1>This is a Single Page Application</h1>
    <nav>
      <NavLink to="/page1">Go to Page 1</NavLink> &nbsp;
      <NavLink to="/page2">Go to Page 2</NavLink> &nbsp;
      <NavLink to="/page3">Go to Page 3</NavLink> &nbsp;
      <NavLink to="/">Go to Home Page</NavLink>
    </nav>
    <Routes>
      <Route path="/page1" element={<Screen1 />} />
      <Route path="/page2" element={<Screen2 />} />
      <Route path="/page3" element={<Screen3 />} />
    </Routes>
  </Router>
</>;