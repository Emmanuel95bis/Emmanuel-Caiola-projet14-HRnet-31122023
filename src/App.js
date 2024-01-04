import "./App.scss";
//import { Home } from "./pages/Home";
import { Home } from "./pages/HomeV3redux";
import Error from "./pages/error404/Error404";
import { Viewemployees } from "./pages/ViewemployeesV3redux";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Viewemployees" element={<Viewemployees />} />
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
