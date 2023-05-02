import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Committee from "./pages/Committee";
import ImportantDate from "./pages/ImportantDate";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/committee" element={<Committee />} />
      <Route exact path="/importantdates" element={<ImportantDate />} />
    </Routes>
  );
}

export default App;
