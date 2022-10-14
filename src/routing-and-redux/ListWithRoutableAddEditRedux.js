import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddForm } from "./AddForm";
import { EditForm } from "./EditForm";
import { List } from "./List";

export const ListWithRoutableAddEditRedux = () => <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/add" element={<AddForm />} />
      <Route path="/edit/:id" element={<EditForm />} />
    </Routes>
  </BrowserRouter>
</>
