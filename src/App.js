import Editeinfo from "./component/Editeinfo";
import Form from "./component/Form";

import Tabledata from "./component/Tabledata";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/table-data" element={<Tabledata />} />
          <Route path="/edite/:id" element={<Editeinfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
