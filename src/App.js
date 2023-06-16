import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Table1 } from "./components/Table1";
import { Table2 } from "./components/Table2";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className=" nav">
        <div className="nav-items">
          <button className="bttn" onClick={() => navigate("/table1")}>
            TABLE 1
          </button>

          <button className="bttn" onClick={() => navigate("/table2")}>
            TABLE 2
          </button>
        </div>
      </div>
      <div className="components">
        <Routes>
          <Route path="/table1" element={<Table1 />} />
          <Route path="/table2" element={<Table2 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
