import "./App.scss";
import { Home } from "./pages/Home";
import Error from "./pages/error404/Error404";
import { Viewemployees } from "./pages/Viewemployees";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="Viewemployees" element={<Viewemployees />} />
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
